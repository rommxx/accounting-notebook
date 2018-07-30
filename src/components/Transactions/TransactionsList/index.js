import React, { Component } from 'react';
import Transaction from '../Transaction';
import TransactionsHeader from '../TransactionsHeader';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class TransactionsList extends Component {

    state = {
        transactions: [],
        expanded: null,
    };

    componentDidMount () {
        this._fetchTransactions();
    }

    handleChange = id => (event, expanded) => {
        this.setState({
            expanded: expanded ? id : false,
        });
    };

    _fetchTransactions = async () => {

        try {
            const response = await fetch('http://localhost:7001/api/transactions', {
                method:  'GET'
            });

            if (response.status !== 200) {
                throw new Error('Fetch transactions error');
            }

            const data = await response.json();
            this.setState({ transactions: data });
        } catch ({ message }) {
            console.error(message);
        }
    };

    render () {
        const { expanded, transactions } = this.state;
        const { classes } = this.props;

        const transactionsJSX = transactions.map((transaction) => (
            <Transaction
                id = { transaction.id }
                key = { transaction.id }
                expanded = {expanded}
                type = {transaction.type}
                date = {transaction.effectiveDate}
                amount = {transaction.amount}
                handleChange = {this.handleChange}
                classes = {classes}
            />
        ));

        return (
            <div>
                <TransactionsHeader />
                <div>{transactionsJSX}</div>
            </div>
        );
    }
}

export default withStyles(styles)(TransactionsList);
