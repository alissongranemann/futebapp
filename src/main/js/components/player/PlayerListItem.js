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
            <div className="list-item">
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                <div className="action-row">
                    <Link to={`/player/edit/${this.props.id}`}>
                        <button className="action-button-wrapper">
                            <img className="action-button" src="/images/icons/edit-button.svg" />
                        </button>
                    </Link>
                    <button className="action-button-wrapper" onClick={this.onRemove}>
                        <img className="action-button" src="/images/icons/delete-button.svg" />
                    </button>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (data) => dispatch(startRemovePlayer(data))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
