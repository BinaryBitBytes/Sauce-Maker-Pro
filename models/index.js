//Import models
const Attribute = require('./Attributes');
const BaseIngredient = require('./BaseIngredient');
const Ingredient = require('./Ingredient');
const IngredientAttribute = require('./IngridientAttribute');
const Instruction = require('./Instruction');
const SauceRecipe = require('./sauceRecipeModel');
// const BaseIngredientAttribute = require('./BaseIngredientAttribute)

//Attribute belongsToMany Ingredients through IngredientAttribute

//Attribute belongsToMany BaseIngredients through BaseIngredientAttribute

//SauceRecipe hasMany Instructions

//Instruction belongsTo SauceRecipe





// Exports models with fk associations
module.exports = { Attribute, BaseIngredient, Ingredient, IngredientAttribute, Instruction, SauceRecipe };