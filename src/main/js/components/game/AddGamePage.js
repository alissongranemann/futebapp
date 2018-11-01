import React from 'react';
import { connect } from 'react-redux';
import { startAddGame } from 'actions/games';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GameForm from './GameForm';

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
                        <Typography variant="h4">
                            CRIAR PELADA
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
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

const mapDispatchToProps = dispatch => ({
    startAddGame: (groupId, game) => dispatch(startAddGame(groupId, game)),
});

export default connect(undefined, mapDispatchToProps)(AddGamePage);
