const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

exports.sendOtp = async (req, res) => {
    const number = req.body.mobileNumber;
    console.log(req.body);
    console.log("number : ",number);
    console.log("reached through app here");

    const servicesSid = process.env.TWILIO_VERIFY_SERVICE_SID;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    client.verify.v2.services(servicesSid)
        .verifications.create({ to: `+91${number}`, channel: 'sms' })
        .then(verification => {
            console.log(verification.sid);
            res.status(200).send({ message: "OTP sent successfully" });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: "Failed to send OTP" });
        });
}


exports.sendOtp = async (req, res) => {
    const number = req.body.mobileNumber;
    console.log("Request body:", req.body);
    console.log("Mobile number:", number);

    const servicesSid = process.env.TWILIO_VERIFY_SERVICE_SID;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    if (!servicesSid || !accountSid || !authToken) {
        console.error("Missing Twilio credentials in environment variables");
        return res.status(500).send({ message: "Server configuration error" });
    }

    const client = twilio(accountSid, authToken);

    try {
        const verification = await client.verify.v2.services(servicesSid)
            .verifications.create({ to: `+91${number}`, channel: 'sms' });
        
        console.log("Verification SID:", verification.sid);
        res.status(200).send({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error in sendOtp:");
        console.error('Error details:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        console.error('Error status:', error.status);
        res.status(500).send({ message: "Failed to send OTP", error: error.message });
    }
}

exports.verifyOtp = async (req, res) => {
    const number = req.body.mobileNumber;
    const otpCode = req.body.otpCode;
    console.log("Verification body:", req.body);

    const servicesSid = process.env.TWILIO_VERIFY_SERVICE_SID;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    if (!servicesSid || !accountSid || !authToken) {
        console.error("Missing Twilio credentials in environment variables");
        return res.status(500).send({ message: "Server configuration error" });
    }

    const client = twilio(accountSid, authToken);

    try {
        const verification_check = await client.verify.v2.services(servicesSid)
            .verificationChecks.create({ to: `+91${number}`, code: otpCode });
        
        console.log("Verification check status:", verification_check.status);
        
        if (verification_check.status === "approved") {
            res.status(200).send({ message: "OTP verified successfully" });
        } else {
            res.status(400).send({ message: "OTP verification failed" });
        }
    } catch (error) {
        console.error("Error in verifyOtp:");
        console.error('Error details:', error);
        console.error('Error message:', error.message);
        console.error('Error code:', error.code);
        console.error('Error status:', error.status);
        res.status(500).send({ message: "Failed to verify OTP", error: error.message });
    }
}
