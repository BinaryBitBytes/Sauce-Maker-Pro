//Import models
const Attribute = require('./Attributes');
const BaseIngredient = require('./BaseIngredient');
const Ingredient = require('./Ingredient');
const IngredientAttribute = require('./IngridientAttribute');
const Instruction = require('./Instruction');

Attribute.belongsTo(Ingredient, { //Attribute belongsToMany Ingredients through IngredientAttribute
    foreignKey: 'Ingredient_id',
    onDelete: 'CASCADE'
});

//Attribute.belongsTo(BaseIngredientAttribute, { //Attribute belongsToMany BaseIngredients through BaseIngredientAttribute
//    foreignKey: 'BaseIngredientAttribute_id',
//    onDelete: 'CASCADE'
//});

SauceRecipe.hasMany(Instruction, { //SauceRecipe hasMany Instructions
    foreignKey: 'Instruction_id',
    onDelete: 'CASCADE'
});

Instruction.belongsTo(SauceRecipe, { //Instruction belongsTo SauceRecipe
    foreignKey: 'SauceRecipe_id',
    onDelete: 'CASCADE'
});



// Exports models with fk associations
module.exports = { Attribute, BaseIngredient, Ingredient, IngredientAttribute, Instruction, SauceRecipe };