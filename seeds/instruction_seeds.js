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
        "ingredient_id": 3
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "id": 3,
        "name": "Mush",
        "action": "Mush grape jelly into sauce",
        "ingredient_id": 8
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "id": 4,
        "name": "Cook",
        "action": "Cook",
        "ingredient_id": 2
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "id": 5,
        "name": "Squirt",
        "action": "Squirt siracha onto sauce",
        "ingredient_id": 4
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    },
    {
        "id": 6,
        "name": "Blend",
        "action": "Blend the chicken stock into the mix",
        "ingredient_id": 20
        //^^ Action will be expanded to a full string to list out instructions to the user ^^
    }
]

const seedInstructions = () => Instruction.bulkCreate(instructionseedData);

module.exports = seedInstructions;