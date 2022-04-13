const Recipe = require('../models/SauceRecipeModel');

const recipeData = [
    {
        //"id":"1",
        "sauce_name":"Hot Sauce",
    
    },
    {
        //"id":"2",
        "sauce_name":"Creamy Chedder",

    },
    {
        //"id":"3",
        "sauce_name":"Honey Mustard",

    },
    {
        //"id":"4",
        "sauce_name":"Smoked Butter",

    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;