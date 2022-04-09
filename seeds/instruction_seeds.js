const Instruction = require('../models/Instruction');

const instructionseedData = [
    //Mix (ingredient_name) into base: 1"
    //Cook (ingredient) for (time) and mix into base: 2"
    {
        "name": "Mix",
        "action": "Mix",
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "name": "Cook",
        "action": "Cook",
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    }
]

const seedInstructions = () => Instruction.bulkCreate(instructionSeedData);

module.exports = seedIngredients;