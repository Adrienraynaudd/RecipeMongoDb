const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');

const RecipeRouter = require('./Routes/Recipe');
const comment = require('./Routes/comment');
const userRoutes = require('./Routes/user');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

app.use(compression());

mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log('Connected to MongoDB with Success !');
}).catch((err) => {
  console.log('MongoDB ERROR', err);
});

app.use(bodyParser.json());

app.use('/api/recipes', RecipeRouter);
app.use('/api/comments', comment);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bonjour, monde !');
  });
  app.use('/api/users', userRoutes);