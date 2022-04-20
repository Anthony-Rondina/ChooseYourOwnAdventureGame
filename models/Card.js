const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const cardSchema = new Schema({
    img: String,
    title: String,
    cardNumber: Number,
    nextCardNumber: Number,
    prevCardNumber: Number,
    challenge: Boolean,
    challengeDescription: String,
    cardType: String,
    death: Boolean,
    clue: Number,
    sound: String,
    description: String,
    chapter: Number,
    drawClue: Boolean
});

const card = model("card", cardSchema);


module.exports = card;