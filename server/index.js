const express = require('express');
const app = express();

const transactions = [];

app.get('/api/transactions', (req, res) => {

});

app.post('/api/transactions', (req, res) => {

});

const port = process.env.PORT || 7001;
app.listen(port);