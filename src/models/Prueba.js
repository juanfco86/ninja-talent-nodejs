
const { Schema, model } = require('mongoose')

const HolaSchema = Schema({
    hola: {
        type: String
    }
})

module.exports = model('PruebaNombre', HolaSchema, 'prueba')