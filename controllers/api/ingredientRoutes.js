const router = require('express').Router();
const { Ingredient, SauceRecipe, Instruction, Attribute } = require('../../models');

// GET all ingredients
router.get('/', async (req, res) => {
    try {
      const ingredientData = await Ingredient.findAll({
        include: [{ model: Instruction }, {model: Attribute}],
      });
      res.status(200).json(ingredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single ingredient
  router.get('/:id', async (req, res) => {
    try {
      const ingredientData = await Ingredient.findByPk(req.params.id, {

        include: [
          {model: Instruction, attributes: ['id', 'name', 'action', 'ingredient_id']}
        ],

      });
      if (!ingredientData) {
        res.status(404).json({ message: 'No ingredient found with this id!' });
        return;
      }
      // res.status(200).json(ingredientData);
      const ingredient = ingredientData.get({ plain: true });
      res.render('ingredient', {ingredient})
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a ingredient
  router.post('/', async (req, res) => {
    try {
      const ingredientData = await Ingredient.create(req.body);
      res.status(200).json(ingredientData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a ingredient
  router.delete('/:id', async (req, res) => {
    try {
      const ingredientData = await Ingredient.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!ingredientData) {
        res.status(404).json({ message: 'No ingredient found with this id!' });
        return;
      }
  
      res.status(200).json(ingredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;