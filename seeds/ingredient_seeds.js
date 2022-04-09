
const Ingredient = require('../models/Ingredient');

const ingredientSeedData = [
    {
        "id": 1,
        "name": "Mustard",
        "volume": 0.2,
        "recipe_id": 1
    },
    {
        "id": 2,
        "name": "Ketchup",
        "volume": 1,
        "recipe_id": 2
    },
    {
        "id": 3,
        "name": "Mayonaisse",
        "volume": 0.5,
        "recipe_id": 3
    },
    {
        "id": 4,
        "name": "Siracha",
        "volume": 3.5,
        "recipe_id": 4
    },
    {
        "id": 8,
        "name": "Grape Jelly",
        "volume": 0.4,
        "recipe_id": 1
    },
    {
        "id": 20,
        "name": "Chicken Stock",
        "volume": 0.8,
        "recipe_id": 2
    }
    
]

const seedIngredients = () => Ingredient.bulkCreate(ingredientSeedData);


module.exports = seedIngredients;