// firebase emulators:start command to start firebase express on localhost

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_SVY8bMiulUJidRpFbRxL8dFC00eiCAquvP');

// App Configs
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => {
    res.status(200).send('Testing Express Server');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total * 100;

    console.log('Payment Req On' + total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Server Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-b05d5/us-central1/api
