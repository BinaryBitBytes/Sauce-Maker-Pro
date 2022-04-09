const Attribute = require('../models/Attributes');

const attributeData = [
    {
        "attribute_name": "sweet"
    },
    {
        "attribute_name": "spicy"
    },
    {
        "attribute_name": "salty"
    }
];


const seedAttributes = () => Attribute.bulkCreate(attributeData);

module.exports = seedAttributes;