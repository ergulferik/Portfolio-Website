const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    title:String,
    description: String,
    extras: [String],
    continueUrl: String,
    order:String,
})

module.exports = mongoose.model("Card",cardSchema)