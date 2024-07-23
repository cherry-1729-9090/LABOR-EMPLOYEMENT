const express = require('express');
const router = express.Router();
const { sendOtp, verifyOtp } = require('../controllers/authControllers'); // Adjust the path if needed
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

module.exports = router;
