const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const commentSchema = new Schema({
    img: String,
    content: String,
    title: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Comment = model("Comment", commentSchema);


module.exports = Comment;