const functions = require('firebase-functions');
const express = require('express');

require("dotenv").config()
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// API
//App config
const app = express();
//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    console.log('Payments Request Received BOOM!!! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api = functions.https.onRequest(app)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//(http://localhost:5001/clone-d67b9/us-central1/api).
