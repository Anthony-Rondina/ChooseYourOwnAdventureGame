const mongoose = require("../config/database");
const { Schema, model } = mongoose;

// make fruits schema
const blogPostSchema = new Schema({
    img: String,
    content: String,
    title: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const BlogPost = model("BlogPost", blogPostSchema);


module.exports = BlogPost;