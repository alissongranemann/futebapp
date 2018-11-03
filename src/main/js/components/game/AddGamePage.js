import React from 'react';
import { connect } from 'react-redux';
import { startAddGame } from 'actions/games';
import GameForm from './GameForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class AddGamePage extends React.Component {
    onSubmit = (game) => {
        this.props.startAddGame(this.props.match.params.groupId, game);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Criar pelada">
                <GameForm
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startAddGame: (groupId, game) => dispatch(startAddGame(groupId, game)),
});

export default connect(undefined, mapDispatchToProps)(AddGamePage);
