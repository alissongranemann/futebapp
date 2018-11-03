import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        color: 'white',
        minWidth: 130,
    },
};

export const PositiveActionButton = (props) => {
    const { classes, onClick, label } = props;
    return (
        <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default withStyles(styles)(PositiveActionButton);
