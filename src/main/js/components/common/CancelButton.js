import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        color: 'white',
        marginRight: 15,
        minWidth: 130,
    },
};

const CancelButton = (props) => {
    const { classes, onClick } = props;
    return (
        <Button
            variant="contained"
            size="large"
            className={classes.button}
            onClick={onClick}
            color="secondary"
        >
            Cancelar
        </Button>
    );
};

export default withStyles(styles)(CancelButton);
