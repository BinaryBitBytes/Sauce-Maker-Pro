const Recipe = require('../models/sauceRecipeModel');

const recipeData = [
    {
        "id":"1",
        "sauce_name":"Hot Sauce",
        "ingredients":"Siracha",
        "instructions":"Stir"
    },
    {
        "id":"2",
        "sauce_name":"Creamy Chedder",
        "ingredients":"Cheese",
        "instructions":"Melt"
    },
    {
        "id":"3",
        "sauce_name":"Honey Mustard",
        "ingredients":["Honey","Mustard", "Brown Sugar"],
        "instructions":"Whisp"
    },
    {
        "id":"4",
        "sauce_name":"Smoked Butter",
        "ingredients":["Liquid Smoke","Butter"],
        "instructions":["Melt","Stir"]
    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;