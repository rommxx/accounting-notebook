import React from 'react';
import { string, func, number } from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    column: {
        flexBasis: '33.33%',
    },
});

function TransactionsHeader(props) {

    const {classes} = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>Date</Typography>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>Type</Typography>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>Amount</Typography>
                </div>
            </ExpansionPanelSummary>
        </ExpansionPanel>
    );
}

export default withStyles(styles)(TransactionsHeader);
