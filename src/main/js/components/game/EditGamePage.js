import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { startEditGame } from 'actions/games';

export class EditGamePage extends React.Component {

    onSubmit = (game) => {
        this.props.startEditGame(this.props.game.id, game);
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <div className="page-header">
                <div className="content-container page-header__action">
                        <h1 className="page-header__title">Editar pelada</h1>
                        <button className="header-action-button-wrapper" onClick={this.props.history.goBack}>
                            <img className="header-action-button" src="/images/icons/cancel-button.svg" />
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <GameForm
                        game={this.props.game}
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state, props) => {
    return {
        game: state.games.find((game) => game.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditGame: (id, game) => dispatch(startEditGame(id, game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGamePage);
