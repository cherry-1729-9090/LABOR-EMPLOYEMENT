const { initializeApp } = require("firebase/app");
const { getAuth, RecaptchaVerifier, signInWithPhoneNumber } = require("firebase/auth");
const dotenv = require("dotenv");

dotenv.config();

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

exports.sendOtp = async (req, res) => {
    const phoneNumber = req.body.mobileNumber;

    try {
        const appVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved - allow signInWithPhoneNumber.
                console.log("reCAPTCHA solved!");
            }
        }, auth);

        signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then call confirm with the code.
                window.confirmationResult = confirmationResult;
                res.status(200).send({ message: "OTP sent successfully" });
            })
            .catch((error) => {
                console.error("Error during signInWithPhoneNumber", error);
                res.status(500).send({ message: "Failed to send OTP" });
            });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to send OTP" });
    }
}

exports.verifyOtp = async (req, res) => {
    const otpCode = req.body.otpCode;

    try {
        confirmationResult.confirm(otpCode).then((result) => {
            // User signed in successfully.
            const user = result.user;
            res.status(200).send({ message: "OTP verified successfully", user });
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            res.status(400).send({ message: "OTP verification failed" });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to verify OTP" });
    }
}
