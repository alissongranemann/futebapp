import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemovePlayer } from 'actions/players';

export class PlayerListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemovePlayer({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <Link className="list-item" to={`/player/edit/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                <img className="delete-button" src="/images/icons/delete-button.svg" onClick={this.onRemove} />
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (data) => dispatch(startRemovePlayer(data))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
