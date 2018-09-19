import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { addPlayer } from 'actions/groups';

const AddPlayerPage = (props) => (
  <div>
    <h1>Criar jogador</h1>
    <PlayerForm
      onSubmit={(player) => {
        props.dispatch(addPlayer(props.match.params.groupId, player));
        props.history.push(`/group/${props.match.params.groupId}`);
      }}
    />
  </div>
);

export default connect()(AddPlayerPage);
