import React from 'react';
import { connect } from 'react-redux';
import GameForm from './GameForm';
import { startEditGame } from 'actions/games';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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
                        <Typography variant="h4">
                            EDITAR PELADA
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
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
