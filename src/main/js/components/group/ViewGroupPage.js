import React from 'react';
import { connect } from 'react-redux';
import GameList from 'components/game/GameList'
import PlayerList from 'components/player/PlayerList';

const ViewGroupPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container page-header__action">
                    <h1 className="page-header__title">{props.group.name}</h1>
                    <button className="header-action-button-wrapper" onClick={props.history.goBack}>
                        <img className="header-action-button" src="/images/icons/back.svg" />
                    </button>
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
