import React from 'react';
import { connect } from 'react-redux';
import { startEditPlayer } from 'actions/players';
import FormPageWrapper from '../common/FormPageWrapper';
import PlayerForm from './PlayerForm';

export class EditPlayerPage extends React.Component {
    onSubmit = (player) => {
        this.props.startEditPlayer(this.props.player.id, player);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Editar jogador">
                <PlayerForm
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapStateToProps = (state, props) => ({
    player: state.players.find(player => player.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditPlayer: (id, player) => dispatch(startEditPlayer(id, player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerPage);
