import React from 'react';
import { connect } from 'react-redux';
import { startRemovePlayer } from 'actions/players'

const PlayerListItem = (props) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{props.name}</h3>
        </div>
        {/* <button type="button" onClick={props.startRemovePlayer(props.id)}>-</button> */}
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (id) => () => dispatch(startRemovePlayer({ id }))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
