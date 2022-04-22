const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const clueSchema = new Schema({
    img: String,
    title: String, //Clue
    chapter: String,
    cardNumber: Number,
    cardType: String,
    sound: String,
    description: String,
    goalCard: Boolean,
    instructions: String,
    relatedCard: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    statIncreaseImg: String,
    choice1: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
    choice2: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
});

const Card = model("Clue", cardSchema);


module.exports = Card;