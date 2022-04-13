
const sequelize = require('../config/connection');

const attributeData = require('./attributes_seeds');

const baseAttributeData = require('./baseAttribute_seeds');

const recipeSeedData = require('./recipe_seeds');

const baseIngredientData = require('./baseIngredient_seeds.js');

const ingredientData = require('./ingredient_seeds.js');

const ingredientAttributesData = require('./ingredientAttributes_seeds');

const instructionSeedData = require('./instruction_seeds');


const seedDatabase = async () => {
    
    await sequelize.sync({ force: true });

    await recipeSeedData();    
    
    await ingredientData();

    await attributeData();

    await instructionSeedData();

    await ingredientAttributesData();

    await baseIngredientData();

    await baseAttributeData();

    
  
    


  process.exit(0);
};

seedDatabase();