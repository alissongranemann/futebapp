import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        color: 'white',
        minWidth: 130,
    },
};

const SaveButton = (props) => {
    const { classes, onClick } = props;
    return (
        <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.button}
            onClick={onClick}
        >
            Salvar
        </Button>
    );
};

export default withStyles(styles)(SaveButton);
