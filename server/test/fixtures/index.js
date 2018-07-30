const dummyjson = require('dummy-json');

const typeMock = {
    type: function() {
        return dummyjson.utils.randomArrayItem(['credit', 'debit']);
    }
};

const transactionsTemplate = `
[
    {{#repeat 20}}
    {
      "id": "{{guid}}",
      "type": "{{type}}",
      "amount": "{{int 0 99999}}",
      "effectiveDate": "{{date '2017' '2019' 'YYYY-MM-DD HH:mm:ss'}}"
    }
    {{/repeat}}
]
`;

const transactionsJSON = dummyjson.parse(transactionsTemplate, {helpers: typeMock});
const transactions = JSON.parse(transactionsJSON);

const acceptedTransaction = {
    "id": "2422a742-ace4-414b-9fe0-8b611e2d0338",
    "type": "credit",
    "amount": 25,
    "effectiveDate": "2018-07-30 09:15:14",
    "status": "accepted"
};

module.exports = {
    transactions,
    acceptedTransaction
};