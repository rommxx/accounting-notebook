const express = require('express');
const router = express.Router();
const transactionStorage = require('../../models/transactions/storage');
const storage = new transactionStorage();

router.get('/', (req, res) => {
    res.send(storage.getTransactions());
});

router.post('/', (req, res) => {
    const params = {
        type: req.body.type,
        amount: req.body.amount
    };

    const { error } = storage.validateParams(params);
    if (error) return res.status(400).json({"message" : "Validation failed."});

    const result = storage.addTransaction(params);

    if (result.status === 'Rejected') {
        return res.status(422).json({"message" : "Unprocessable Entity. Transaction rejected due to possible negative balance."});
    }

    res.send(result);
});

module.exports = router;