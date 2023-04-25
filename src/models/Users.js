const { Schema, model } = require('mongoose')

const AddressSchema = Schema({
    id: {
        type: Number,
        integerOnly: true
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
})

AddressSchema.set('toJSON', {
    transform: function (file, data) {
        data.id = data._id;
        delete data._id;
        delete data.__v;
    }
});

const UserSchema = Schema({
    id: {
        type: Number,
        integerOnly: true,
        default: 0
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
    address: {
        type: AddressSchema,
        ref: 'Address',
        required: true
    }
})


UserSchema.set('toJSON', {
    transform: function (file, data) {
        data.id = data._id;
        delete data._id;
        delete data.__v;
    }
});


module.exports = model("Users", UserSchema, "users")