import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    loader: {
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
    },
};

const LoadingPage = (props) => {
    const { classes } = props;
    return (
        <div className={classes.loader}>
            <CircularProgress color="primary" style={{ color: green[500] }} size={75} thickness={5} />
        </div>
    );
};

export default withStyles(styles)(LoadingPage);
