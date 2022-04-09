const IngredientAttribute = require('../models/IngridientAttribute');

const ingredientAttributesData = [
    {
        "ingredient_id": 1,
        "attribute_id": 1
    },
    {
        "ingredient_id": 1,
        "attribute_id": 2
    },
    {
        "ingredient_id": 1,
        "attribute_id": 3
    },
    {
        "ingredient_id": 2,
        "attribute_id": 1
    },
    {
        "ingredient_id": 2,
        "attribute_id": 2
    },
    {
        "ingredient_id": 2,
        "attribute_id": 3
    },
    {
        "ingredient_id": 3,
        "attribute_id": 1
    },
    {
        "ingredient_id": 3,
        "attribute_id": 2
    },
    {
        "ingredient_id": 3,
        "attribute_id": 3
    }
]

const seedIngredientAttributes = () => IngredientAttribute.bulkCreate(ingredientAttributesData);

module.exports = seedIngredientAttributes;