import React, { Component } from 'react';
import transactions from './transactions';
import Transaction from 'components/Transaction';

export default class TransactionsList extends Component {
    render () {
        const transactionsJSX = transactions.map((transaction) => (
            <Transaction
                key = { transaction.id }
            />
        ));

        return (
            <div>
                <div>{transactionsJSX}</div>
            </div>
        );
    }
}
