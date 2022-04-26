const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const clueSchema = new Schema({
    img: String,
    chapter: String,
    cardNumber: Number,
    cardType: String,
    bonusValue: Number,
    sound: String,
    description: String,
    goalCard: Boolean,
    instructions: String,
    statIncreaseImg: String,
    hasClue: Boolean,
    cluePrompt1: String,
    cluePrompt2: String,
    cardPrompt1: String,
    cardPrompt2: String,
    choice1: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    choice2: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    clue1: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
    clue2: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
});

const Card = model("Clue", clueSchema);


module.exports = Card;