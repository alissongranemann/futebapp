import React from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { startLogout } from 'actions/auth';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    button: {
        color: 'white',
    },
    header: {
        background: '#2b5c22',
    },
    headerContent: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.2rem 0',
    },
    headerTitle: {
        color: 'white',
        textDecoration: 'none',
        margin: 0,
        fontWeight: 600,
    },
};

const Header = (props) => {
    const { classes } = props;
    return (
        <header className={classes.header}>
            <div className="content-container">
                <div className={classes.headerContent}>
                    <Link to="/dashboard">
                        <Typography variant="h4" className={classes.headerTitle}>
                            Futebapp
                        </Typography>
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
