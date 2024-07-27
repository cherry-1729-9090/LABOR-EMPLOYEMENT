const authController = require('../controllers/authControllers');
const router = require('express').Router();
console.log("reached here in route");
router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtp);

module.exports = router;