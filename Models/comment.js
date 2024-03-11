const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: String,
    recipe: String,
    mark: Number,
    comment: String,
}, { collection: 'comments' });

module.exports = mongoose.model('Comment', CommentSchema);