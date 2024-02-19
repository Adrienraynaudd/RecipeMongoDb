const express = require('express');
const router = express.Router(); // router intégré au framework Express
const RecipeController = require('../Controller/Recipe');

// Routes CRUD

// Create
router.post('/', RecipeController.createRecipe);

// Read
router.get('/:id', RecipeController.getRecipe);
router.get('/', RecipeController.getAllRecipes);

// Update
router.put('/:id', RecipeController.updateRecipe);

// Delete
router.delete('/:id', RecipeController.deleteRecipe);

module.exports = router;