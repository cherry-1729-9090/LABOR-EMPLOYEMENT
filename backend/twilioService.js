const twilio = require('twilio');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendOtp = (mobileNumber) => {
  return client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications.create({ to: `+91${mobileNumber}`, channel: 'sms' });
};

const verifyOtp = (mobileNumber, otpCode) => {
  return client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: `+91${mobileNumber}`, code: otpCode });
};

module.exports = {
  sendOtp,
  verifyOtp,
};
