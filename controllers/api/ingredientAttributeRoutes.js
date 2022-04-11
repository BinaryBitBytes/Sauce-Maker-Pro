const router = require('express').Router();
const { IngredientAttribute, Ingredient, Attribute } = require('../../models');

// GET all ingredientAttributes
router.get('/', async (req, res) => {
    try {
      const ingredientAttributeData = await IngredientAttribute.findAll();
      res.status(200).json(ingredientAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single ingredientAttribute
  router.get('/:id', async (req, res) => {
    try {
      const ingredientAttributeData = await IngredientAttribute.findByPk(req.params.id);
      if (!ingredientAttributeData) {
        res.status(404).json({ message: 'No ingredientAttribute found with this id!' });
        return;
      }
      res.status(200).json(ingredientAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a ingredientAttribute
  router.post('/', async (req, res) => {
    try {
      const ingredientAttributeData = await IngredientAttribute.create(req.body);
      res.status(200).json(ingredientAttributeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a attribute
  router.delete('/:id', async (req, res) => {
    try {
      const ingredientAttributeData = await IngredientAttribute.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!ingredientAttributeData) {
        res.status(404).json({ message: 'No ingtedientAttribute found with this id!' });
        return;
      }
  
      res.status(200).json(ingredientAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;