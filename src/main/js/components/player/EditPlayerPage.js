import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { startEditPlayer } from 'actions/players';

export class EditPlayerPage extends React.Component {

    onSubmit = (player) => {
        this.props.startEditPlayer(this.props.player.id, player);
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <div className="page-header">
                <div className="content-container page-header__action">
                        <h1 className="page-header__title">Editar jogador</h1>
                        <button className="header-action-button-wrapper" onClick={this.props.history.goBack}>
                            <img className="header-action-button" src="/images/icons/cancel-button.svg" />
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <PlayerForm
                        player={this.props.player}
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }

};

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditPlayer: (id, player) => dispatch(startEditPlayer(id, player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerPage);
