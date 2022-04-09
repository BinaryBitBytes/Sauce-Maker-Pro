const Recipe = require('../models/SauceRecipeModel');

const recipeData = [
    {
        //"id":"1",
        "sauce_name":"Hot Sauce",
        "ingredient_id":null,//"Siracha",
        "instruction_id":2//"Stir"
    },
    {
        //"id":"2",
        "sauce_name":"Creamy Chedder",
        "ingredient_id":null,//"Cheese",
        "instruction_id":1//"Melt"
    },
    {
        //"id":"3",
        "sauce_name":"Honey Mustard",
        "ingredient_id":null,//["Honey","Mustard", "Brown Sugar"],
        "instruction_id":2//"Whisp"
    },
    {
        //"id":"4",
        "sauce_name":"Smoked Butter",
        "ingredient_id":null,//["Liquid Smoke","Butter"],
        "instruction_id":1//["Melt","Stir"]
    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;