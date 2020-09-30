const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32
    },
    startDate: {
        type: String,
        trim: true,
        maxlength: 32
    },
    endDate: {
        type: String,
        trim: true,
        maxlength: 32
    },
    status: {
        type: String,
        default: "Aktualne",
        enum: ["Aktualne", "Nieaktualne"] // enum means string objects
    },
    typeEvent: {
        type: String,
        default: "Mazury",
        enum: ["Mazury", "Góry"] // enum means string objects
    },
}, { timestamps: true })



module.exports = mongoose.model('Event', eventSchema);