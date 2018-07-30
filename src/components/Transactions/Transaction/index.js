import React, { Component } from 'react';
import { string, func, number } from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Transaction extends Component {
    static propTypes = {
        id:           string.isRequired,
        type:         string.isRequired,
        amount:       number.isRequired,
        date:         string.isRequired,
        handleChange: func.isRequired,
    };

    _handleChange = (event, expanded) => {
        const { handleChange, id} = this.props;

        handleChange(id)(event, expanded);
    };

    render () {
        const { expanded, id, classes, type, amount, date } = this.props;

        return (
            <ExpansionPanel expanded={expanded === id} onChange={this._handleChange}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{date}</Typography>
                    <Typography className={classes.heading}>{type}</Typography>
                    <Typography className={classes.secondaryHeading}>{amount}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <span>Transaction Uuid: {id}</span>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
