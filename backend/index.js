const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_SVY8bMiulUJidRpFbRxL8dFC00eiCAquvP');

// App Configs
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
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

app.get('/', (req, res) => {
    res.status(200).send('Testing Express Server');
});

app.listen(4000, () => {
    console.log('listening port 4000');
});
