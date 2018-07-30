const express = require('express');
const app = express();
const cors = require('cors');
const transactions = require('./routes/api/transactions');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/transactions', transactions);
app.use(errorHandler);

const port = process.env.PORT || 7001;
app.listen(port, () => console.log(`Listening on port ${port}..`));