const Comment = require('../Models/Comment');
const { default: mongoose } = require('mongoose');

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ recipe: req.params.id });
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
}

exports.makeComment = async (req, res) => {
        const newComment = new Comment({
            user: req.body.user,
            recipe: req.params.id,
            mark: req.body.mark,
            comment: req.body.comment,
        });
        
        newComment.save().then(createdComment => {
            res.status(201).json({ message: 'Comment created successfully' });
        }).catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to create comment' });
        });
};
