const router = require('express').Router();
const { SauceRecipe, Ingredient, Attribute, IngredientAttribute } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await SauceRecipe.findAll({
     
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('main', { //sends recipes that are requested into sauce-recipes.handlebars that way handlebars can grab all the json and we can use html and css
      //we will need a recipe.handlebars view so we can have a res.render recipe so we can have a get route and post a html document instead of json
      recipes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
