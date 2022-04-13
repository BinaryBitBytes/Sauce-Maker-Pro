const Attribute = require('../models/Attributes');

const attributeData = [
    {
        "attribute_name": "sweet",
        "ingredient_id": 1
    },
    {
        "attribute_name": "spicy",
        "ingredient_id": 2
    },
    {
        "attribute_name": "salty",
        "ingredient_id": 3
    }
];


const seedAttributes = () => Attribute.bulkCreate(attributeData);

module.exports = seedAttributes;