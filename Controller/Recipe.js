const Recipe = require('../Models/Recipe');

exports.getAllRecipes = (req, res, next) => {
    Recipe.find().then(documents => {
        res.status(200).json({
            message: 'Recipes fetched successfully!',
            recipes: documents
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Fetching recipes failed!'
        });
    });
}

exports.getRecipe = (req, res, next) => {
    Recipe.findById(req.params.id).then(recipe => {
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({message: 'Recipe not found!'});
        }
    }).catch(error => {
        res.status(500).json({
            message: 'Fetching recipe failed!'
        });
    });
}

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id}).then(result => {
        res.status(200).json({message: 'Recipe deleted!'});
    }).catch(error => {
        res.status(500).json({
            message: 'Deleting recipe failed!'
        });
    });
}

exports.createRecipe = (req, res, next) => {
    let ingredients = []
    for (let i = 0; i < req.body.ingredients.length; i++) {
        ingredients.push({
            name: req.body.ingredients[i].name,
            quantity: req.body.ingredients[i].quantity,
            unit: req.body.ingredients[i].unit
        });
    }
    const recipe = new Recipe({
        title: req.body.title,
        image: req.body.image,
        ingredients: ingredients,
        steps: req.body.steps,
        difficulty: req.body.difficulty,
        cookingTime: req.body.cookingTime,
        servings: req.body.servings,
        // user: req.userData.userId,
        desc: req.body.desc,
        tags: req.body.tags
    });
    recipe.save().then(createdRecipe => {
        res.status(201).json({
            message: 'Recipe added successfully!',
            recipe: createdRecipe
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Creating a recipe failed!',
            error: error
        });
    });
}

exports.updateRecipe = (req, res, next) => {
    let ingredients = []
    for (let i = 0; i < req.body.ingredients.length; i++) {
        ingredients.push({
            name: req.body.ingredients[i].name,
            quantity: req.body.ingredients[i].quantity,
            unit: req.body.ingredients[i].unit
        });
    }
    const recipe = new Recipe({
        _id: req.body.id,
        titre: req.body.titre,
        image: req.body.image,
        ingredients: ingredients,
        steps: req.body.steps,
        difficulty: req.body.difficulty,
        cookingTime: req.body.cookingTime,
        servings: req.body.servings,
        user: req.userData.userId,
        desc: req.body.desc,
        tags: req.body.tags
    });
    Recipe.updateOne({_id: req.params.id}, recipe).then(result => {
        res.status(200).json({message: 'Update successful!'});
    }).catch(error => {
        res.status(500).json({
            message: 'Could not update recipe!'
        });
    });
}

