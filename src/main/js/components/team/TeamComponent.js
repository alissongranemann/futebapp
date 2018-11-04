import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TeamPicker from './TeamPicker';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    team: {
        width: '100%',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    teamA: {
        borderRightStyle: 'solid',
        borderRightWidth: 1,
    },
});

const TeamComponent = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <TeamPicker
                className={`${classes.team} ${classes.teamA}`}
                name="Time A"
            />
            <TeamPicker
                className={classes.team}
                name="Time B"
            />
        </div>
    );
};

export default withStyles(styles)(TeamComponent);
