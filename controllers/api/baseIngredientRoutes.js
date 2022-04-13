const router = require('express').Router();
const { BaseIngredient, BaseAttribute } = require('../../models');

// GET all baseIngredients
router.get('/', async (req, res) => {
    try {
      const baseIngredientData = await BaseIngredient.findAll({
        include: [{model: BaseAttribute}],
      });
      res.status(200).json(baseIngredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single baseIngredient
  router.get('/:id', async (req, res) => {
    try {
      const baseIngredientData = await BaseIngredient.findByPk(req.params.id);
      if (!baseIngredientData) {
        res.status(404).json({ message: 'No baseIngredient found with this id!' });
        return;
      }
      res.status(200).json(baseIngredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a baseIngredient
  router.post('/', async (req, res) => {
    try {
      const baseIngredientData = await BaseIngredient.create(req.body);
      res.status(200).json(baseIngredientData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a baseIngredient
  router.delete('/:id', async (req, res) => {
    try {
      const baseIngredientData = await BaseIngredient.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!baseIngredientData) {
        res.status(404).json({ message: 'No baseIngredient found with this id!' });
        return;
      }
  
      res.status(200).json(baseIngredientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;