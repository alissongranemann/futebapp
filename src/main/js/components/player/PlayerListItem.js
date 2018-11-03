import React from 'react';
import { connect } from 'react-redux';
import { startRemovePlayer } from 'actions/players';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAction from '../common/ListItemAction';

export class PlayerListItem extends React.Component {
    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemovePlayer({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <ListItem divider={this.props.divider}>
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.name}
                    secondary={this.props.position}
                />
                <ListItemAction
                    editLink={`/player/edit/${this.props.id}`}
                    onRemove={this.onRemove}
                />
            </ListItem>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startRemovePlayer: data => dispatch(startRemovePlayer(data)),
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
