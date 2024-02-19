const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    users: [
        {
            username: String,
            email: String,
            password: String,
            roles: String,
        }
    ]
}, { collection: 'CollectionUser' });

const Users = mongoose.model('Users', utilisateurSchema);

module.exports = Users;