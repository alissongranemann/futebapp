import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GroupListItem from './GroupListItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { positiveButtonStyles } from 'styles/button'
import Typography from '@material-ui/core/Typography';

export class GroupList extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="content-container">
                <Typography variant="h5" gutterBottom>
                    SEUS GRUPOS
                </Typography>
                <div className="list-body">
                    {
                        this.props.groups.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>Sem grupos</span>
                            </div>
                        ) : (
                                this.props.groups.map((group) => {
                                    return <GroupListItem key={group.id} {...group} />;
                                })
                            )
                    }
                </div>
                <div className="list-footer">
                    <Link to={'/group/create/'}>
                        <Button variant="contained" size="large" color='primary' className={classes.button}>
                            Criar grupo
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    };
};

const connectedComponent = connect(mapStateToProps)(GroupList);
export default withStyles(positiveButtonStyles)(connectedComponent);
