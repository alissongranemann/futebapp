import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { startAddPlayer } from 'actions/players';

export class AddPlayerPage extends React.Component {

    onSubmit = (player) => {
        this.props.startAddPlayer(this.props.match.params.groupId, player);
        this.props.history.push(`/group/${this.props.match.params.groupId}`);
    };

    render() {
        return (
            <div>
                <h1></h1>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Criar jogador</h1>
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
