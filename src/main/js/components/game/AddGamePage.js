import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { addGame } from '../../actions/groups';

const AddGamePage = (props) => (
    <div>
        <h1>Criar Pelada</h1>
        <GameForm
            onSubmit={(game) => {
                props.dispatch(addGame(props.match.params.groupId, game));
                props.history.push(`/group/${props.match.params.groupId}`);
            }}
            groupId={props.match.params.groupId}
            players={props.players}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
      players: state.groups.find((group) => group.id === props.match.params.groupId).players
    };
};

export default connect(mapStateToProps)(AddGamePage);
