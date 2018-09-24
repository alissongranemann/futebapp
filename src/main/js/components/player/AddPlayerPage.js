import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { startAddPlayer } from 'actions/players';

const AddPlayerPage = (props) => (
  <div>
    <h1>Criar jogador</h1>
    <PlayerForm
      onSubmit={(player) => {
        props.startAddPlayer(props.match.params.groupId, player);
        props.history.push(`/group/${props.match.params.groupId}`);
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddPlayer: (groupId, player) => dispatch(startAddPlayer(groupId, player))
});

export default connect(undefined, mapDispatchToProps)(AddPlayerPage);
