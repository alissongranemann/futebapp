import React from 'react';
import { connect } from 'react-redux';
import { startRemoveGame } from 'actions/games'

const GameListItem = (props) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{props.location}</h3>
        </div>
        {/* <button type="button" onClick={props.startRemoveGame(props.id)}>-</button> */}
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startRemoveGame: (id) => () => dispatch(startRemoveGame({ id }))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);