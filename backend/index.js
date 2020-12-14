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

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.get('/', (req, res) => {
    res.status(200).send('Testing Express Server');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening.....');
});
