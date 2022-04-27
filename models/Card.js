const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const cardSchema = new Schema({
    img: String,
    chapter: String,
    cardNumber: Number,
    choice1: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    choice2: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    choice3: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    choice4: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    previousCard: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    previousCard2: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    previousCard3: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    previousCard4: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    deathRoute: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    deathRoute2: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    deathRoute3: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    hasClue: Boolean,
    clue1: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
    clue2: { type: mongoose.Schema.Types.ObjectId, ref: 'Clue' },
    cluePrompt1: String,
    cluePrompt2: String,
    hasChallenge: Boolean,
    challengeTitle: String,
    challengeImg: String,
    challengeDescription: String,
    challengeType: String,//Strength, agility etc
    cardType: String,
    death: Boolean,
    choice1TransitionScentence: String,
    choice2TransitionScentence: String,
    choice3TransitionScentence: String,
    choice4TransitionScentence: String,
    returnTransitionScentence: String,
    returnTransitionScentence2: String,
    returnTransitionScentence3: String,
    sound: String,
    description: String,
    chapterNumber: Number,
});

const Card = model("Card", cardSchema);


module.exports = Card;