const router = require('express').Router();
const { SauceRecipe, Instruction, Ingredient, BaseIngredient } = require('../../models');

// GET all sauceRecipes
router.get('/', async (req, res) => {
    try {
      const sauceRecipeData = await SauceRecipe.findAll({
        include: [{model: BaseIngredient}, { model: Ingredient }],
      });
      res.status(200).json(sauceRecipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single sauceRecipe
  router.get('/:id', async (req, res) => {
    try {
      const sauceRecipeData = await SauceRecipe.findByPk(req.params.id);
      if (!sauceRecipeData) {
        res.status(404).json({ message: 'No sauceRecipe found with this id!' });
        return;
      }
      res.status(200).json(sauceRecipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a sauceRecipe
  router.post('/', async (req, res) => {
    try {
      const sauceRecipeData = await SauceRecipe.create(req.body);
      res.status(200).json(sauceRecipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a sauceRecipe
  router.delete('/:id', async (req, res) => {
    try {
      const sauceRecipeData = await SauceRecipe.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!sauceRecipeData) {
        res.status(404).json({ message: 'No sauceRecipe found with this id!' });
        return;
      }
  
      res.status(200).json(sauceRecipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;