import React, { Component } from 'react';
import Styles from './styles.m.css';
import TransactionsList from 'components/TransactionsList';

export default class Content extends Component {
    render () {
        return (
            <div className = { Styles.content }>
                <TransactionsList />
            </div>
        );
    }
}
