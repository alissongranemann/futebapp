import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { startAddGame } from 'actions/games';

export class AddGamePage extends React.Component {

    onSubmit = (game) => {
        this.props.startAddGame(this.props.match.params.groupId, game);
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Criar pelada</h1>
                    </div>
                </div>
                <div className="content-container">
                    <GameForm
                        onSubmit={this.onSubmit}
                        players={this.props.players}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddGame: (groupId, game) => dispatch(startAddGame(groupId, game))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGamePage);
