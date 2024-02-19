const jwt = require('jsonwebtoken');


const secretKey = process.env.RANDOM_TOKEN_SECRET; // recup la clé secrète

const authToken = (req, res, next) => { // middleware pour vérifier le token
    const token = req.header('Authorization'); // token recupere et prend la valeur situé dans la partie authorization du header

    if (!token) {
        return res.status(401).json({ message: 'Auth Error' }); // si token est vide alors on renvoi une erreur
    }

    jwt.verify(token, secretKey, (err, user) => { // jwt verifi si le token et la clé secrète sont correct
        if(err) {
            return res.status(403).json({ message: 'Invalid Token' }); // le token est invalide on renvoi une erreur
        }

        req.user = user; // si il n'y a pas d'erreur et que le token est valide alors on recupere l'utilisateur
        next(); // ca jsp mais on doit passé a autre chose j'imagine
    }
    );
}

module.exports = { authToken} // on export la fonction de verification du token