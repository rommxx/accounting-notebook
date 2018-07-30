const dummyjson = require('dummy-json');

const typeMock = {
    type: function() {
        return dummyjson.utils.random() > 0.5 ? 'credit' : 'debit';
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

module.exports = {
    transactions
};