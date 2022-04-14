const router = require('express').Router();
const { SauceRecipe, Ingredient, BaseIngredient } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await SauceRecipe.findAll({
      include: [{model: BaseIngredient}, { model: Ingredient }],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes);

    // Pass serialized data and session flag into template
    res.render('all', { 
      recipes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
