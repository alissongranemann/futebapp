import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { startAddGame } from 'actions/games';

const AddGamePage = (props) => (
    <div>
        <h1>Criar Pelada</h1>
        <GameForm
            onSubmit={(game) => {
                props.startAddGame(game);
                props.history.push(`/group/${props.match.params.groupId}`);
            }}
            players={props.players}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
      players: state.players
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddGame: (game) => dispatch(startAddGame(game))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGamePage);
