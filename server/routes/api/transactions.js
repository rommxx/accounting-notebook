const express = require('express');
const router = express.Router();
const NodeCache = require( "node-cache" );
const storage = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

const transactions = [];

router.get('/', (req, res) => {
    res.send(transactions);
});

router.post('/', (req, res) => {

    const id = transactions.length + 1;
    const transaction = {
        type: req.body.type,
        amount: req.body.amount
    };

    transactions.push(transaction);

    storage.set(id, transaction, function(err, success){
        if(!err && success){
            console.log(success);
            res.send(transaction);
        } else {
            res.status(400).send(err);
        }
    });
});

module.exports = router;