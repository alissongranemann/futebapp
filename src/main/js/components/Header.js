import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from 'actions/auth';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        color: 'white',
    },
};

const Header = (props) => {
    const { classes } = props;
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>Futebapp</h1>
                    </Link>
                    <Button onClick={props.startLogout} className={classes.button}>
                        Logout
                    </Button>
                </div>
            </div>
        </header>
    );
};

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout()),
});

const connectedComponent = connect(undefined, mapDispatchToProps)(Header);
export default withStyles(styles)(connectedComponent);
