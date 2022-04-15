const BaseIngredient = require('../models/BaseIngredient');

const baseIngredientData =  [
    {
        "base_ingredient_name": "Olive Oil",
        "attribute_id": 3,
        "recipe_id": 1
    },
    {
        "base_ingredient_name": "Yogurt",
        "attribute_id": 1,
        "recipe_id": 2
    },
    {
        "base_ingredient_name": "Gochujang",
        "attribute_id": 2,
        "recipe_id": 3
    },

    {
        "base_ingredient_name": "Cherry Pie Filling",
        "attribute_id": 2,
        "recipe_id": 4
    }
];



const seedBaseIngredients = () => BaseIngredient.bulkCreate(baseIngredientData);

module.exports = seedBaseIngredients;
