import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveGame } from 'actions/games'

export class GameListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGame({ id: this.props.id, groupId : this.props.groupId });
    };

    render() {
        return (
            <Link className="list-item" to={`/game/edit/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.location}</h3>
                </div>
                <img className="delete-button" src="/images/icons/delete-button.svg" onClick={this.onRemove} />
            </Link>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGame: (data) => dispatch(startRemoveGame(data))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);