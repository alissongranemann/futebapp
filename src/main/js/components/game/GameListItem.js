import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveGame } from 'actions/games';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import moment from 'moment';

export class GameListItem extends React.Component {
    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGame({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <ListItem divider={this.props.divider}>
                <ListItemText
                    primary={this.props.location}
                    secondary={
                        `${moment(this.props.time).format('HH:mm')} ${
                            moment(this.props.date).format('DD/MM')}`
                    }
                />
                <ListItemSecondaryAction>
                    <Link to={`/game/edit/${this.props.id}`}>
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

const mapDispatchToProps = dispatch => ({
    startRemoveGame: data => dispatch(startRemoveGame(data)),
});

export default connect(undefined, mapDispatchToProps)(GameListItem);
