import React, { Component } from 'react';
import Styles from './styles.m.css';

export default class Header extends Component {
    render () {
        return (
            <div className={Styles.header}>
                <h1 className={Styles.title}>Accounting notebook</h1>
                <h2 className={Styles.subtitle}>Transactions History</h2>
            </div>
        );
    }
}
