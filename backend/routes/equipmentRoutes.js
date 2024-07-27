const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/EquipmentController');

router.post('/create', equipmentController.createEquipment);
router.get('/', equipmentController.getAllEquipment);
router.get('/get/:id', equipmentController.getEquipmentById);
router.put('/update/:id', equipmentController.updateEquipment);
router.delete('/delete/:id', equipmentController.deleteEquipment);
router.get('/user/:id', equipmentController.getEquipmentByUserId);
router.get('/category/:category', equipmentController.getEquipmentByCategory);

module.exports = router;
