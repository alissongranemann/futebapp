import React from 'react';
import { connect } from 'react-redux';
import { startAddPlayer } from 'actions/players';
import PlayerForm from './PlayerForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class AddPlayerPage extends React.Component {
    onSubmit = (player) => {
        this.props.startAddPlayer(this.props.match.params.groupId, player);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Criar jogador">
                <PlayerForm
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startAddPlayer: (groupId, player) => dispatch(startAddPlayer(groupId, player)),
});

export default connect(undefined, mapDispatchToProps)(AddPlayerPage);
