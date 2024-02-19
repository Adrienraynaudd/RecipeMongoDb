const express = require('express');
const comment = require('./Routes/comment');
const app = express();

app.use('comment', comment)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Bonjour, monde !');
  });
  