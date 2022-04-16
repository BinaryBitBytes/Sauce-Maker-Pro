//Import models
const SauceRecipe = require('./sauceRecipeModel');
const Attribute = require('./Attributes');
const BaseAttribute = require('./BaseAttributes');
const BaseIngredient = require('./BaseIngredient');
const Ingredient = require('./Ingredient');
const Instruction = require('./Instruction');
const User = require('./userModel');

//Sauce Recipes have one base ingredient.
SauceRecipe.hasOne(BaseIngredient, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
});

BaseIngredient.belongsTo(SauceRecipe, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE'
})

BaseAttribute.belongsTo(BaseIngredient, {
    // Define the third table needed to store the foreign keys
    foreignKey: 'base_ingredient_id',
    onDelete: 'CASCADE'
});

BaseIngredient.hasMany(BaseAttribute, { //SauceRecipe hasMany Ingredients
    foreignKey: 'base_ingredient_id', //!^^
    onDelete: 'CASCADE'
});

Attribute.belongsTo(Ingredient, {
    // Define the third table needed to store the foreign keys
    foreignKey: 'ingredient_id',
    onDelete: 'CASCADE'
});

Ingredient.hasMany(Attribute, { //SauceRecipe hasMany Ingredients
    foreignKey: 'ingredient_id', //!^^
    onDelete: 'CASCADE'
});

SauceRecipe.hasMany(Ingredient, { //SauceRecipe hasMany Ingredients
    foreignKey: 'recipe_id', //!^^
    onDelete: 'CASCADE'
});


Ingredient.belongsTo(SauceRecipe, { //Attribute belongsToMany Ingredients through IngredientAttribute
    foreignKey: 'recipe_id', //! ^^
    onDelete: 'CASCADE'
});


Ingredient.hasOne(Instruction, {
    foreignKey: 'ingredient_id',
    // When we delete a Reader, make sure to also delete the associated Library Card. 'n stuff
    onDelete: 'CASCADE',
});

Instruction.belongsTo(Ingredient, { //Instruction belongsTo SauceRecipe
    foreignKey: 'ingredient_id',

    onDelete: 'CASCADE'
});

// Exports models with fk associations
module.exports = { Attribute, BaseAttribute, BaseIngredient, Ingredient, Instruction, SauceRecipe, User };