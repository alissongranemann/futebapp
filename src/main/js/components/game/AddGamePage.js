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
                <div className="content-container page-header__action">
                        <h1 className="page-header__title">Criar pelada</h1>
                        <button className="header-action-button-wrapper" onClick={this.props.history.goBack}>
                            <img className="header-action-button" src="/images/icons/cancel-button.svg" />
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <GameForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddGame: (groupId, game) => dispatch(startAddGame(groupId, game))
});

export default connect(undefined, mapDispatchToProps)(AddGamePage);
