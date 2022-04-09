const sequelize = require('../config/connection');
const { Attribute, BaseIngredient, Ingredient, Instruction, sauceRecipe } = require('../models');

const attributeData = require('./attributes_seeds');
const baseIngredientData = require('./baseIngredient_seeds.js');
const ingredientData = require('./ingredient_seeds.js');
const ingredientAttributesData = require('./ingredientAttributes_seeds');
const recipeSeedData = require('./recipe_seeds');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });

    await attributeData();
  
    await baseIngredientData();

    await ingredientData();

    await ingredientAttributesData();

    await recipeSeedData();


  process.exit(0);
};

seedDatabase();