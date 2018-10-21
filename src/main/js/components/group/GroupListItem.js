import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveGroup } from 'actions/groups';
import { withRouter } from "react-router";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export class GroupListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGroup({ id: this.props.id });
    };

    onEdit = (e) => {
        e.preventDefault();
        this.props.history.push(`/group/edit/${this.props.id}`);
    }

    render() {
        return (
            <Link to={`/group/${this.props.id}`}>
                <ListItem>
                    <ListItemText
                        primary={this.props.name}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={this.onEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={this.onRemove}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGroup: (data) => dispatch(startRemoveGroup(data))
});

const connectedComponent = connect(undefined, mapDispatchToProps)(GroupListItem);
const styledComponent = withStyles(styles)(connectedComponent);
export default withRouter(styledComponent);
