const mongoose = require('mongoose');

const Comment = mongoose.model("Comment", new mongoose.Schema({
    name: String,
    text: String,
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    }
}));

module.exports = Comment;