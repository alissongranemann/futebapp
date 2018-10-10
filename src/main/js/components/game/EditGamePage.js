import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { startEditGame } from 'actions/games';

export class EditGamePage extends React.Component {

    onSubmit = (game) => {
        this.props.startEditGame(this.props.game.id, game);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Editar pelada</h1>
                    </div>
                </div>
                <div className="content-container">
                    <GameForm
                        game={this.props.game}
                        onSubmit={this.onSubmit}
                        players={this.props.players}
                    />
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state, props) => {
    return {
        players: [],
        game: state.games.find((game) => game.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditGame: (id, game) => dispatch(startEditGame(id, game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGamePage);
