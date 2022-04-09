const baseIngredientData =  [
    {
        "name": "Olive Oil",
        "attribute_id": 3
    },
    {
        "name": "Yogurt",
        "attribute_id": 1
    },
    {
        "name": "Gochujang",
        "attribute_id": 2
    }
];



const seedBaseIngredients = () => Gallery.bulkCreate(seedBaseIngredients);

module.exports = seedBaseIngredients;
