const Instruction = require('../models/Instruction');

const instructionseedData = [
    //Mix (ingredient_name) into base: 1"
    //Cook (ingredient) for (time) and mix into base: 2"
    {
        "id": 1, 
        "name": "Mix",
        "action": "Mix",
        "ingredient_id": 1
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "id": 2,
        "name": "Cook",
        "action": "Cook",
        "ingredient_id": 1
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    }
]

const seedInstructions = () => Instruction.bulkCreate(instructionseedData);

module.exports = seedInstructions;