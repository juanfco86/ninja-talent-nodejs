const UserPrueba = require('../models/Prueba')

const prueba = (req, res) => {
    return res.status(200).json({
        msg: 'Prueba exitosa'
    })
}

module.exports = {
    prueba
}