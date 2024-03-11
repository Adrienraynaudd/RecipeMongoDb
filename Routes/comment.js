const express = require('express');
const CommentController = require('../Controller/comment');
const auth = require('../Middleware/auth');
const router = express.Router();


// read all comment of one recipe
router.get('/:id', CommentController.getAllComments)

// add a comment on a recipe
router.post('/:id', auth, CommentController.makeComment);

module.exports = router