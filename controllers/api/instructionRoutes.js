const router = require('express').Router();
const { Instruction, Ingredient } = require('../../models');

// GET all instructions
router.get('/', async (req, res) => {
    try {
      const instructionData = await Instruction.findAll();
      res.status(200).json(instructionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single instruction
  router.get('/:id', async (req, res) => {
    try {
      const instructionData = await Instruction.findByPk(req.params.id);
      if (!instructionData) {
        res.status(404).json({ message: 'No instruction found with this id!' });
        return;
      }
      res.status(200).json(instructionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a instruction
  router.post('/', async (req, res) => {
    try {
      const instructionData = await Instruction.create(req.body);
      res.status(200).json(instructionData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a instruction
  router.delete('/:id', async (req, res) => {
    try {
      const instructionData = await Instruction.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!instructionData) {
        res.status(404).json({ message: 'No instruction found with this id!' });
        return;
      }
  
      res.status(200).json(instructionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;