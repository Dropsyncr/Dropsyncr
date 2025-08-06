const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        orders: [
            {
                "order_number": "#4544321",
                "order_date": "04 February, 2024",
                "customer": "Yaga Masamichi",
                "payment_status": "paid",
                "fulfillment_status": "fulfilled",
                "shipping_method": "standard",
                "total": "$2,584.00"
            },
            {
                "order_number": "#4544322",
                "order_date": "05 February, 2024",
                "customer": "Gojo Satoru",
                "payment_status": "paid",
                "fulfillment_status": "unfulfilled",
                "shipping_method": "express",
                "total": "$3,120.50"
            },
            {
                "order_number": "#4544323",
                "order_date": "06 February, 2024",
                "customer": "Itadori Yuji",
                "payment_status": "unpaid",
                "fulfillment_status": "unfulfilled",
                "shipping_method": "standard",
                "total": "$875.99"
            },
            {
                "order_number": "#4544324",
                "order_date": "07 February, 2024",
                "customer": "Fushiguro Megumi",
                "payment_status": "paid",
                "fulfillment_status": "fulfilled",
                "shipping_method": "overnight",
                "total": "$1,430.00"
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;