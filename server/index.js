const express = require('express');
const app = express();
const transactions = require('./routes/api/transactions');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/transactions', transactions);

const port = process.env.PORT || 7001;
app.listen(port, () => console.log(`Listening on port ${port}..`));