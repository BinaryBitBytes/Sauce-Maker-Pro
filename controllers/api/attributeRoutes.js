const router = require('express').Router();
const { Attribute } = require('../../models');

// GET all attributes
router.get('/', async (req, res) => {
    try {
      const attributeData = await Attribute.findAll();
      res.status(200).json(attributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single attribute
  router.get('/:id', async (req, res) => {
    try {
      const attributeData = await Attribute.findByPk(req.params.id);
      if (!attributeData) {
        res.status(404).json({ message: 'No attribute found with this id!' });
        return;
      }
      res.status(200).json(attributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a attribute
  router.post('/', async (req, res) => {
    try {
      const attributeData = await Attribute.create(req.body);
      res.status(200).json(attributeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a attribute
  router.delete('/:id', async (req, res) => {
    try {
      const attributeData = await Attribute.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!attributeData) {
        res.status(404).json({ message: 'No attribute found with this id!' });
        return;
      }
  
      res.status(200).json(attributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;