import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GameList from 'components/game/GameList'
import PlayerList from 'components/player/PlayerList';

const ViewGroupPage = ( props ) => {
  return (
    <div>
      <Link to={`/group/edit/${props.group.id}`}>
        <h2>{props.group.name}</h2>
      </Link>
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
