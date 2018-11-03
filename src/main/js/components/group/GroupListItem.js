import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveGroup } from 'actions/groups';
import { compose } from 'redux';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ListItemAction from '../common/ListItemAction';

const styles = {
    root: {
        marginBottom: 10,
    },
};
export class GroupListItem extends React.Component {
    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGroup({ id: this.props.id });
    };

    render() {
        const {
            classes, id, name, players,
        } = this.props;
        return (
            <Paper className={classes.root}>
                <Link to={`/group/${id}`}>
                    <ListItem>
                        <ListItemText
                            primary={name}
                            secondary={
                                players ? `${Object.entries(players).length} jogadores` : 'Sem jogadores'
                            }
                        />
                        <ListItemAction
                            editLink={`/group/edit/${this.props.id}`}
                            onRemove={this.onRemove}
                        />
                    </ListItem>
                </Link>
            </Paper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startRemoveGroup: data => dispatch(startRemoveGroup(data)),
});


export default compose(withStyles(styles),
    connect(undefined, mapDispatchToProps))(GroupListItem);
