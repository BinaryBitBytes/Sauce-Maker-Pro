const Attribute = require('../models/Attributes');

const attributeData = [
    {
        "name": "sweet"
    },
    {
        "name": "spicy"
    },
    {
        "name": "salty"
    }
];


const seedAttributes = () => Attribute.bulkCreate(attributeData);

module.exports = seedAttributes;