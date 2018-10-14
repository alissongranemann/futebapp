import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { startAddPlayer } from 'actions/players';

export class AddPlayerPage extends React.Component {

    onSubmit = (player) => {
        this.props.startAddPlayer(this.props.match.params.groupId, player);
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <h1></h1>
                <div className="page-header">
                    <div className="content-container page-header__action">
                        <h1 className="page-header__title">Criar jogador</h1>
                        <button className="header-action-button-wrapper" onClick={this.props.history.goBack}>
                            <img className="header-action-button" src="/images/icons/cancel-button.svg" />
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <PlayerForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startAddPlayer: (groupId, player) => dispatch(startAddPlayer(groupId, player))
});

export default connect(undefined, mapDispatchToProps)(AddPlayerPage);
