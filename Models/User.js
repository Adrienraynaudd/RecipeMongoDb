const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
}, { collection: 'CollectionUser' });

const User = mongoose.model('User', utilisateurSchema);

module.exports = User;
