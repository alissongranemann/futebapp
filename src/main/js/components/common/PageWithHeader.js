import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    pageHeader: {
        background: '#fff',
        marginBottom: '3.2rem',
        padding: '0.75rem 0',
        boxShadow: '0 2px 1px 0 rgba(0,0,0,.12)',
    },
    pageHeaderContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

const PageWithHeader = (props) => {
    const {
        title, readOnly, onClickHeaderAction, classes, children,
    } = props;
    return (
        <React.Fragment>
            <div className={classes.pageHeader}>
                <div className={`content-container ${classes.pageHeaderContent}`}>
                    <Typography variant="h4">
                        {title.toUpperCase()}
                    </Typography>
                    <IconButton onClick={onClickHeaderAction}>
                        {
                            readOnly
                                ? <ArrowBack fontSize="large" />
                                : <CloseIcon fontSize="large" />
                        }
                    </IconButton>
                </div>
            </div>
            <div className="content-container">
                {children}
            </div>
        </React.Fragment>
    );
};

export default withStyles(styles)(PageWithHeader);
