const BaseAttribute = require('../models/BaseAttributes');

const baseAttributeData = [
    {
        "base_attribute_name": "sweet",
        "base_ingredient_id": 1
    },
    {
        "base_attribute_name": "spicy",
        "base_ingredient_id": 2
    },
    {
        "base_attribute_name": "salty",
        "base_ingredient_id": 3
    }
];


const seedBaseAttributes = () => BaseAttribute.bulkCreate(baseAttributeData);

module.exports = seedBaseAttributes;