//Import models
const Attribute = require('./Attributes');
const BaseIngredient = require('./BaseIngredient');
const Ingredient = require('./Ingredient');
const IngredientAttribute = require('./IngridientAttribute');
const Instruction = require('./Instruction');
const SauceRecipe = require('./sauceRecipeModel');
// const BaseIngredientAttribute = require('./BaseIngredientAttribute);

//Attribute belongsToMany Ingredients through IngredientAttribute
Attribute.belongsToMany(Ingredient, {
    foreignKey: 'Ingredient_id',
    onDelete: 'CASCADE'
});
//Attribute belongsToMany BaseIngredients through BaseIngredientAttribute
/*//!
Attribute.belongsToMany(BaseIngredient, {
    foreignKey: '',
    onDelete: 'CASCADE'
});
*/
//SauceRecipe hasMany Instructions
SauceRecipe.hasMany(Instruction, {
    foreignKey: 'Instruction_id',
    onDelete: 'CASCADE'
});
//Instruction belongsTo SauceRecipe
Instruction.belongsTo(SauceRecipe, {
    foreignKey: 'SauceRecipe_id',
    onDelete: 'CASCADE'
});




// Exports models with fk associations
module.exports = { Attribute, BaseIngredient, Ingredient, IngredientAttribute, Instruction, SauceRecipe };