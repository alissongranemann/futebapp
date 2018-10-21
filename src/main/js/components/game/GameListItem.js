import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveGame } from 'actions/games'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export class GameListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGame({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <div className="list-item">
                <div>
                    <Typography variant="h6">
                        {this.props.location}
                    </Typography>
                </div>
                <div>
                    <Link to={`/game/edit/${this.props.id}`}>
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
    startRemoveGame: (data) => dispatch(startRemoveGame(data))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);