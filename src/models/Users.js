const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    user: {
        id: {
            type: Number,
            integerOnly: true,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
        type: String,
        required: true
        },
        birthDate: {
            type: Date,
            required: true,
            description: "LocalDateTime type"
        },
    },
    address: {
        id: {
            type: Number,
            integerOnly: true,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    }
})

module.exports = model("Users", UserSchema, "users")