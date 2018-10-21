import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemovePlayer } from 'actions/players';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export class PlayerListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemovePlayer({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <div className="list-item">
                <div>
                    <Typography variant="h6">
                        {this.props.name}
                    </Typography>
                </div>
                <div>
                    <Link to={`/player/edit/${this.props.id}`}>
                        <IconButton aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <IconButton aria-label="Delete" onClick={this.onRemove}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (data) => dispatch(startRemovePlayer(data))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
