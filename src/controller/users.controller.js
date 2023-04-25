
const Users = require('../models/Users')


const getUsers = async(req, res) => {
    try {
        const usersData = await Users.find({})
        res.status(200).json({
            description: "OK",
            schema: [
                usersData
            ]
        })
    } catch (error) {
        console.error(error)
    }
}

const createUser = async(req, res) => {
    try {
        const body = req.body
        const findEmail = await Users.findOne({ email: body.email })
        
        if (findEmail !== null) {
            return res.status(405).json({
                description: "Invalid input email"
            })
        }

        
        const user = new Users({
            name: body.name,
            email: body.email,
            birthDate: body.birthDate,
            address: {
                street: body.street,
                state: body.state,
                city: body.city,
                country: body.country,
                zip: body.zip
            }
        })
        const userData = await user.save()
        
        if(!userData) {
            return res.status(405).json({
                description: "Invalid input"
            })
        }

        return res.status(201).json({
            description: "CREATED",
            schema: userData
        })
    } catch (error) {
        console.error(error)
        return res.status(405).json({
            description: "Invalid input"
        })
    }
}

const getUsersById = async(req, res) => {
    try {
        const params = req.params.userId
        const usersData = await Users.find({ id: params })

        if (!usersData) {
            return res.status(404).json({
                description: "User not found"
            })
        }
        
        return res.status(200).json({
            description: "OK",
            schema: {
                usersData
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            description: "Invalid user id"
        })
    }
}

const updateUsersById = async(req, res) => {
    try {
        const params = req.params.userId
        const body = req.body
        const usersData = await Users.findByIdAndUpdate(params, body, { new: true })

        if (!usersData) {
            return res.status(404).json({
                description: "User not found"
            })
        }
    
        return res.status(200).json({
            description: "OK",
            schema: {
                usersData
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            description: "Invalid user id"
        })
    }
}

const deleteUsersById = async(req, res) => {
    try {
        const params = req.params.userId
        const usersData = await Users.findByIdAndDelete(params)

        if (!usersData) {
            return res.status(404).json({
                description: "User not found"
            })
        }

        return res.status(200).json({
            description: "OK"
        })
    } catch (error) {
        console.error(error)
        return res.status(400).json({
            description: "Invalid user id"
        })
    }
}


module.exports = {
    getUsers,
    createUser,
    getUsersById,
    updateUsersById,
    deleteUsersById
}