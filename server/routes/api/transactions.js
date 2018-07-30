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

    storage.validateParams(params);
    const result = storage.addTransaction(params);

    if (result.status === 'rejected') {
        const msg = "Unprocessable Entity. Transaction rejected due to potential negative balance.";
        return res.status(422).json(prepareResponse(msg));
    }

    res.send(result);
});

const prepareResponse = (msg) => {
    return  {
        'message' : msg
    };
};

module.exports = router;