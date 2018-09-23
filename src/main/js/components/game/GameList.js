import React from 'react';
import { connect } from 'react-redux';
import GameListItem from './GameListItem';
import { Link } from 'react-router-dom';

const GameList = (props) => (
  <div>
    <h3>Peladas</h3>
    {props.games.map((game) => {
        return <GameListItem key={game.id} {...game} />;
    })}
    <Link to={`/group/${props.groupId}/game/create/`}>
        <button>Criar pelada</button>
    </Link>
  </div>
);

const mapStateToProps = (state) => {
    return {
      games: state.games
    };
};

export default connect(mapStateToProps)(GameList);
