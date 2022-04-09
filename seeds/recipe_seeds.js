const Recipe = require('../models/SauceRecipeModel');

const recipeData = [
    {
        //"id":"1",
        "sauce_name":"Hot Sauce",
        "ingredient_id":1,//"Siracha",
        "instruction_id":2//"Stir"
    },
    {
        //"id":"2",
        "sauce_name":"Creamy Chedder",
        "ingredient_id":2,//"Cheese",
        "instruction_id":1//"Melt"
    },
    {
        //"id":"3",
        "sauce_name":"Honey Mustard",
        "ingredient_id":3,//["Honey","Mustard", "Brown Sugar"],
        "instruction_id":2//"Whisp"
    },
    {
        //"id":"4",
        "sauce_name":"Smoked Butter",
        "ingredient_id":6,//["Liquid Smoke","Butter"],
        "instruction_id":1//["Melt","Stir"]
    }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;