
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
        "id": 5,
        "name": "Grape Jelly",
        "volume": 0.4,
        "recipe_id": 5
    },
    {
        "id": 6,
        "name": "Chicken Stock",
        "volume": 0.8,
        "recipe_id": 6
    }
    
]

const seedIngredients = () => Ingredient.bulkCreate(ingredientSeedData);


module.exports = seedIngredients;