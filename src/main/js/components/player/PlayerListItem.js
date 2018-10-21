import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemovePlayer } from 'actions/players';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

export class PlayerListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemovePlayer({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        const { classes } = this.props;

        return (
            <ListItem >
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.name}
                    secondary={this.props.position}
                />
                <ListItemSecondaryAction>
                    <Link to={`/player/edit/${this.props.id}`}>
                        <IconButton aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <IconButton aria-label="Delete" onClick={this.onRemove}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (data) => dispatch(startRemovePlayer(data))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
