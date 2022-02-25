const mongoose = require('mongoose');

const Article = mongoose.model("Article", new mongoose.Schema({
    title: String,
    text: String
}));

module.exports = Article;