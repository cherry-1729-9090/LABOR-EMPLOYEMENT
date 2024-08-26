const authController = require('../controllers/authControllers');
const router = require('express').Router();

router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtp);

module.exports = router;
