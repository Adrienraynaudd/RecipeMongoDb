const express = require('express');
const { getAllComments, makeComment } = require('../Controller/comment');


// read all comment of one recipe
comment.get('/:id', getAllComments)

// add a comment on a recipe
comment.post('/:id', makeComment);

module.exports = comment