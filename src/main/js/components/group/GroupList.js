import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { positiveButtonStyles } from 'styles/button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import combineStyles from 'styles/utils/combineStyles';
import GroupListItem from './GroupListItem';

const styles = {
    list: {
        padding: 0,
    },
};

export class GroupList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="content-container">
                <Typography variant="h5" gutterBottom>
                    SEUS GRUPOS
                </Typography>
                <Paper>
                    <List className={classes.list}>
                        {
                            this.props.groups.length === 0 ? (
                                <Typography variant="subtitle1" align="center" >
                                Sem jogadores
                                </Typography>
                            ) : (
                                this.props.groups.map((group, index, arr) => <GroupListItem
                                    key={group.id}
                                    {...group}
                                    divider={index !== arr.length - 1}
                                />)
                            )
                        }
                    </List>
                </Paper>
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
}

const mapStateToProps = state => ({
    groups: state.groups,
});

const connectedComponent = connect(mapStateToProps)(GroupList);
export default withStyles(combineStyles(styles, positiveButtonStyles))(connectedComponent);
