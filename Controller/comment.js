const { commentModel } = require('../Models/comment');
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nosql');


exports.getAllComments = async (req, res) => {
    try {
        const comments = await commentModel.find({ recipe: req.params.id });
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
}

exports.makeComment = async (req, res) => {
    try {
        const newComment = new commentModel({
            user: req.body.user,
            recipe: req.params['id'],
            mark: req.body.mark,
            comment: req.body.comment,
        });

        // Save the comment to the database
        await newComment.save();

        // Respond with a success message
        res.status(201).json({ message: 'Comment created successfully' });
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error(error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
}