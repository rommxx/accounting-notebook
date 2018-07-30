const moment = require('moment');
const uuid = require('uuid/v4');
const Type = require('./type');
const Status = require('./status');

class Storage {

    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    isAcceptable(params) {
        const { type, amount } = params;

        if (type === Type.debit) {
            return this.balance - amount >= 0;
        }

        return true;
    }

    validateParams(params) {
        const { type } = params;
        const supportedTypes = [Type.credit, Type.debit];

        if (!supportedTypes.includes(type)) {
            throw new Error('Validation failed. Transaction type is not supported');
        }

        return true;
    }

    addTransaction(params) {
        const { type, amount } = params;

        const transaction = {
            id: uuid(),
            type,
            amount,
            effectiveDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            status: this.isAcceptable(params) ? Status.accepted : Status.rejected
        };

        if (transaction.status === Status.accepted) {
            this.updateBalance(transaction);
        }

        this.transactions.push(transaction);

        return transaction;
    }

    getTransactions() {
        return this.transactions;
    }

    updateBalance(transaction) {
        const {type, amount} = transaction;

        this.balance += (type === Type.credit) ? amount : (-1 * amount);

        return this;
    }
}

module.exports = Storage;