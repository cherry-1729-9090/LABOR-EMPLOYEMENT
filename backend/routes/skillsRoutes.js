const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/SkillsController');

router.post('/', skillsController.createSkill);
router.get('/', skillsController.getAllSkills);
router.get('/:id', skillsController.getSkillById);
router.put('/:id', skillsController.updateSkill);
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
