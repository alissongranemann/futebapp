import React from 'react';
import { connect } from 'react-redux';
import GameList from 'components/game/GameList'
import PlayerList from '../player/PlayerList';

const ViewGroupPage = (props) => {
  return (
    <div>
      <GameList groupId={props.match.params.id} />
      <PlayerList groupId={props.match.params.id} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    group: state.groups.find((group) => group.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ViewGroupPage);
