const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },

    lastName: {
        type: String,
        minlength: 1,
        maxlength: 100,
        required: true
    },

    type: {
        type: String,
        enum: ['customer', "delivery_person", "kitchen_employee"],
        required: true
    },

    email: {
        type: String,
        minlength: 6,
        maxlength: 100,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        maxlength: 10,
        unique: true,
        sparse: true
    },

    password: {
        type: String,
        minlength: 1,
        maxlength: 1000,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);