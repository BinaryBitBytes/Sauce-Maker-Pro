const BaseIngredient = require('../models/BaseIngredient');

const baseIngredientData =  [
    {
        "base_ingredient_name": "Olive Oil",
        "attribute_id": 3
    },
    {
        "base_ingredient_name": "Yogurt",
        "attribute_id": 1
    },
    {
        "base_ingredient_name": "Gochujang",
        "attribute_id": 2
    }
];



const seedBaseIngredients = () => BaseIngredient.bulkCreate(baseIngredientData);

module.exports = seedBaseIngredients;
