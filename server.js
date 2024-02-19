const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Bonjour, monde !');
  });
  