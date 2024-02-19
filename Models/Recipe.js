const e = require('express');
const mongoose = require('mongoose');

const IngredientsSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    unit: {type: String, required: true, enum: ['g', 'kg', 'ml', 'cl', 'l', 'cuillère à soupe', 'cuillère à café', 'verre', 'tasse', 'bol', 'pincée', 'pincées', 'pincées']}
});

const RecipeSchema = mongoose.Schema({
    title: {type:String, required: true},
    image: {type:String},
    ingredients: {type:[IngredientsSchema], required: true},
    steps: {type: [String], required: true},
    cookingTime: {type: Number, required: true},
    servings: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    desc: {type: String, required: true},
    tags: {type: [String], required: true},
    difficulty: {type: String, required: true, enum: ['Facile', 'Moyen', 'Difficile']},
});

module.exports = mongoose.model('Recipe', RecipeSchema);