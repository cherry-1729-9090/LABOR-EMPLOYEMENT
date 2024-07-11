const express = require('express');
const dotenv = require('dotenv');
const twilio = require('twilio');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-otp', (req, res) => {
    const number = req.body.mobileNumber;
    console.log(number);

    const servicesSid = process.env.TWILIO_VERIFY_SERVICE_SID;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    console.log(client);
    console.log(servicesSid);
    console.log(accountSid);
    console.log(authToken);
    
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
});

app.post('/verify-otp', (req, res) => {
    const number = req.body.mobileNumber;
    const otpCode = req.body.otpCode;

    const servicesSid = process.env.TWILIO_VERIFY_SERVICE_SID;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    client.verify.v2.services(servicesSid)
        .verificationChecks.create({ to: `+91${number}`, code: otpCode })
        .then(verification_check => {
            console.log(verification_check.status);
            if (verification_check.status === "approved") {
                res.status(200).send({ message: "OTP verified successfully" });
            } else {
                res.status(400).send({ message: "OTP verification failed" });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: "Failed to verify OTP" });
        });
});

app.listen(3500, () => {
    console.log("Server is running on port 3500");
});
