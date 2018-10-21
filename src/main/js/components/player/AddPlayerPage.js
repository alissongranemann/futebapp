import React from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { startAddPlayer } from 'actions/players';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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
                        <Typography variant="h4">
                            CRIAR JOGADOR
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
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
