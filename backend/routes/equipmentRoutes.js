const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.post('/', equipmentController.createEquipment);
router.get('/', equipmentController.getAllEquipment);
router.get('/get/:id', equipmentController.getEquipmentById);
router.put('/update/:id', equipmentController.updateEquipment);
router.delete('/delete/:id', equipmentController.deleteEquipment);

module.exports = router;
