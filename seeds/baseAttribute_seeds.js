const BaseAttribute = require('../models/BaseAttributes');

const baseAttributeData = [
    {
        "baseAttribute_name": "sweet",
        "base_ingredient_id": 1
    },
    {
        "baseAttribute_name": "spicy",
        "base_ingredient_id": 2
    },
    {
        "baseAttribute_name": "salty",
        "base_ingredient_id": 3
    }
];


const seedBaseAttributes = () => BaseAttribute.bulkCreate(baseAttributeData);

module.exports = seedBaseAttributes;