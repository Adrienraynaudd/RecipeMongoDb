const express = require('express');
const { getAllComments, makeComment } = require('../Controller/comment');
const auth = require('../Middleware/auth');
const router = express.Router();


// read all comment of one recipe
router.get('/:id', getAllComments)

// add a comment on a recipe
router.post('/:id', auth, makeComment);

module.exports = router