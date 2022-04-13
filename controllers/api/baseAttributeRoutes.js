const router = require('express').Router();
const { BaseAttribute } = require('../../models/');

// GET all BaseAttributes
router.get('/', async (req, res) => {
    try {
      const BaseAttributeData = await BaseAttribute.findAll();
      res.status(200).json(BaseAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single BaseAttribute
  router.get('/:id', async (req, res) => {
    try {
      const BaseAttributeData = await BaseAttribute.findByPk(req.params.id);
      if (!BaseAttributeData) {
        res.status(404).json({ message: 'No BaseAttribute found with this id!' });
        return;
      }
      res.status(200).json(BaseAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a BaseAttribute
  router.post('/', async (req, res) => {
    try {
      const BaseAttributeData = await BaseAttribute.create(req.body);
      res.status(200).json(BaseAttributeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a BaseAttribute
  router.delete('/:id', async (req, res) => {
    try {
      const BaseAttributeData = await BaseAttribute.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!BaseAttributeData) {
        res.status(404).json({ message: 'No BaseAttribute found with this id!' });
        return;
      }
  
      res.status(200).json(BaseAttributeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;