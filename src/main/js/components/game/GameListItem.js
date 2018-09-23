import React from 'react';
import { connect } from 'react-redux';
import { startRemoveGame } from 'actions/games'

const GameListItem = (props) => (
  <div>
    {props.location}
    <button type="button" onClick={props.startRemoveGame(props.id)}>-</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startRemoveGame: (id) => () => dispatch(startRemoveGame({ id }))
});

export default connect(undefined, mapDispatchToProps)(GameListItem);