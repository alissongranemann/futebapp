import React from 'react';
import { connect } from 'react-redux';
import { startEditPlayer } from 'actions/players';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PlayerForm from './PlayerForm';

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
                        <Typography variant="h4">
                            EDITAR JOGADOR
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
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
}

const mapStateToProps = (state, props) => ({
    player: state.players.find(player => player.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditPlayer: (id, player) => dispatch(startEditPlayer(id, player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerPage);
