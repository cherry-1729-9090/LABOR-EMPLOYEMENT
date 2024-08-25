const { initializeApp } = require("firebase/app");
const { getAuth, RecaptchaVerifier, signInWithPhoneNumber } = require("firebase/auth");

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyARDNYiQUy7KLXXW6UzZQeQE92OBN7kaW0",
  authDomain: "siteassit-otp.firebaseapp.com",
  projectId: "siteassit-otp",
  storageBucket: "siteassit-otp.appspot.com",
  messagingSenderId: "457191652201",
  appId: "1:457191652201:web:937949d5404dd2dd055bf8",
  measurementId: "G-X74T5MYPQ2"
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
