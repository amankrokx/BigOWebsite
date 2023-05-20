/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const Nodemailer = require("nodemailer");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { google: { auth: { OAuth2 } } } = require("googleapis")

// create reusable transporter object using the default SMTP transport and OAuth2

const OAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground")

OAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
})

let transporter;    

OAuth2Client.getAccessToken().then(token => {
  transporter = Nodemailer.createTransport({
      service: "gmail",
      auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: token.token,
      },
  })
}).catch(err => console.log(err))

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendMail = onRequest(
    {
        cors: ["bigo-3ac05.web.app", "bigo-3ac05.firebaseapp.com", "localhost:5000"],
    },
    async (request, response) => {
        try {
            const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
            // phone number regex to accept either 10 digits or with country code
            const phoneRegex = new RegExp("^\\+?[0-9]{10,}$")
            // get email data from request json body
            const { firstName, lastName = "", email, phone, message } = request.body
            // validate email data
            if (!firstName || !email || !phone || !message) return response.status(400).json({ code: 400, message: "Missing required fields" })

            // validate email regex
            if (!emailRegex.test(email)) return response.status(400).json({ code: 400, message: "Invalid email" })
            // validate phone regex
            if (!phoneRegex.test(phone)) return response.status(400).json({ code: 400, message: "Invalid phone number" })
            // validate message length
            if (typeof message !== "string" || message.length > 100_000) return response.status(400).json({ code: 400, message: "Invalid Message or Message too long" })
            // validate names
            if (typeof firstName !== "string" || firstName.length > 100)
                return response.status(400).json({ code: 400, message: "Invalid Name" })
            // Nodemailer send email
            // wait for transporter to be initialized
            while (!transporter) await new Promise(resolve => setTimeout(resolve, 100))
            // send email
            await transporter.sendMail({
                to: [process.env.EMAIL, process.env.EMAIL2],
                subject: "BigO Contact from : " + firstName + " " + lastName,
                text: "Name: " + firstName + " " + lastName + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message,
            })
            response.status(200).json({ code: 200, message: "Message sent successfully" })
        } catch (error) {
            logger.error(error)
            response.status(500).json({ code: 500, message: "Something went wrong, please try again later." })
        }
    }
)