import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';
import { Link } from 'react-router-dom';

const PlayerList = (props) => (
  <div>
    <h3>Jogadores</h3>
    {props.players.map((player) => {
        return <PlayerListItem key={player.id} {...player} />;
    })}
    <Link to={`/group/${props.groupId}/player/create/`}>
        <button>Adicionar jogador</button>
    </Link>
  </div>
);

const mapStateToProps = (state, props) => {
    return {
      players: state.groups.find((group) => group.id === props.groupId).players
    };
};

export default connect(mapStateToProps)(PlayerList);
