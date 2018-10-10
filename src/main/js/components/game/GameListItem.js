import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveGame } from 'actions/games'

export class GameListItem extends React.Component {

    render() {
        return (
            <Link className="list-item" to={`/game/edit/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.location}</h3>
                </div>
                {/* <button type="button" onClick={props.startRemoveGame(props.id)}>-</button> */}
            </Link>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGame: (id) => () => dispatch(startRemoveGame({ id }))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);