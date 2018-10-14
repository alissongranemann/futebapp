import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveGame } from 'actions/games'

export class GameListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGame({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <div className="list-item">
                <div>
                    <h3 className="list-item__title">{this.props.location}</h3>
                </div>
                <div className="action-row">
                    <Link to={`/game/edit/${this.props.id}`}>
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
    startRemoveGame: (data) => dispatch(startRemoveGame(data))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);