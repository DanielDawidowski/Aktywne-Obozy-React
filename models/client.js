const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const ClientSchema = new mongoose.Schema(
    {
        clients: {
            type: Array,
            name: String,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        phone: { 
            type: Number, 
            trim: true,
            required: true 
        },
        event: { 
            type: ObjectId, 
            ref: "Event",
            required: true 
        },
        message: {
            type: String,
            trim: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);

