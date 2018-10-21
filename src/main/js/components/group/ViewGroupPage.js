import React from 'react';
import { connect } from 'react-redux';
import GameList from 'components/game/GameList'
import PlayerList from 'components/player/PlayerList';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';

const ViewGroupPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container page-header__action">
                    <Typography variant="h4" align="left">
                        {props.group.name.toUpperCase()}
                    </Typography>
                    <IconButton aria-label="Go back" onClick={props.history.goBack}>
                        <ArrowBack fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <GameList groupId={props.group.id} />
            <PlayerList groupId={props.group.id} />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        group: state.groups.find((group) => group.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(ViewGroupPage);
