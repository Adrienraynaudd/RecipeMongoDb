const express = require('express');
const router = express.Router(); // router intégré au framework Express
const RecipeController = require('../Controller/Recipe');
const auth = require('../Middleware/auth');

// Routes CRUD

// Create
router.post('/', auth, RecipeController.createRecipe);

// Read
router.get('/:id', auth, RecipeController.getRecipe);
router.get('/', auth, RecipeController.getAllRecipes);

// Update
router.put('/:id', auth, RecipeController.updateRecipe);

// Delete
router.delete('/:id', auth, RecipeController.deleteRecipe);

module.exports = router;