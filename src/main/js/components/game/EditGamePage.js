import React from 'react';
import { connect } from 'react-redux';
import { startEditGame } from 'actions/games';
import GameForm from './GameForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class EditGamePage extends React.Component {
    onSubmit = (game) => {
        this.props.startEditGame(this.props.game.id, game);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Editar pelada">
                <GameForm
                    game={this.props.game}
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapStateToProps = (state, props) => ({
    game: state.games.find(game => game.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditGame: (id, game) => dispatch(startEditGame(id, game)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGamePage);
