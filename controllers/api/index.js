const router = require('express').Router();
const attributeRoutes = require('./attributeRoutes');
const baseAttributeRoutes = require('./baseAttributeRoutes')
const baseIngredientRoutes = require('./baseIngredientRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const ingredientAttributesRoutes= require('./ingredientAttributeRoutes');
const instructionRoutes = require('./instructionRoutes');
const sauceRecipeRoutes = require('./sauceRecipeRoutes');
const userModelRoutes = require('./userModelRoutes');
const { route } = require('./ingredientRoutes');

router.use('/attributes', attributeRoutes);
router.use('/baseAttributes', baseAttributeRoutes);
router.use('/baseIngredients', baseIngredientRoutes);
router.use('/ingredients', ingredientRoutes);
router.use('/ingredientAttributes', ingredientAttributesRoutes);
router.use('/instructions', instructionRoutes);
router.use('/sauceRecipes', sauceRecipeRoutes);
router.use('/users', userModelRoutes);

module.exports = router;
