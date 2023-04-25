
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
        console.log(body.user.email);
        // const findEmail = await Users.user.find({ email: email })
        // console.log(findEmail);
        
        // if (findEmail) {
        //     return res.status(405).json({
        //         description: "Invalid input"
        //     })
        // }

        const user = new Users(body)
        const userData = await user.save()

        if(!userData) {
            return res.status(405).json({
                description: "Invalid input"
            })
        }

        return res.status(201).json({
            description: "CREATED",
            schema: {
                userData
            }
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
        const usersData = await Users.find({ _id: params })

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