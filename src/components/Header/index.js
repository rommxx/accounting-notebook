import React, { Component } from 'react';
import Styles from './styles.m.css';

export default class Header extends Component {
    render () {
        return (
            <div className = { Styles.header }>
                <div className = { Styles.layout }>
                    <div>
                        <h3>Accounting notebook</h3>
                    </div>
                </div>
            </div>
        );
    }
}
