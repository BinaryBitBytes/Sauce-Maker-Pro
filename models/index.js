//Import models
const SauceRecipe = require('./sauceRecipeModel');
const Attribute = require('./Attributes');
const BaseIngredient = require('./BaseIngredient');
const Ingredient = require('./Ingredient');
const IngredientAttribute = require('./IngridientAttribute');
const Instruction = require('./Instruction');

    Attribute.belongsToMany(Ingredient, {
    // Define the third table needed to store the foreign keys
    through: {
      model: IngredientAttribute,
      unique: false
    },
   
  }); 


 Attribute.belongsTo(BaseIngredientAttribute, { //Attribute belongsToMany BaseIngredients through BaseIngredientAttribute
    foreignKey: 'BaseIngredientAttribute_id',
    onDelete: 'CASCADE'
 });

SauceRecipe.hasMany(Instruction, { //SauceRecipe hasMany Instructions
    foreignKey: 'Instruction_id',
    onDelete: 'CASCADE'
});

Instruction.belongsTo(Ingredient, { //Instruction belongsTo SauceRecipe
    foreignKey: 'Ingredient_id',
    onDelete: 'CASCADE'
}); 

SauceRecipe.hasMany(Ingredient, { //SauceRecipe hasMany Instructions
    foreignKey: 'ingredient_id', //!^^
    onDelete: 'CASCADE'
});

Ingredient.belongsTo(SauceRecipe, { //Attribute belongsToMany Ingredients through IngredientAttribute
    foreignKey: 'recipe_id', //! ^^
    onDelete: 'CASCADE'
});




// Exports models with fk associations
module.exports = { Attribute, BaseIngredient, Ingredient, IngredientAttribute, Instruction, SauceRecipe };