import React from 'react';
import { connect } from 'react-redux';
import GameListItem from './GameListItem';
import { Link } from 'react-router-dom';

const GameList = (props) => (
    <div className="content-container">
        <h3 className="list__title">Peladas</h3>
        <div className="list-body">
            {
                props.games.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>Sem peladas</span>
                    </div>
                ) : (
                    props.games.map((game) => {
                        return <GameListItem 
                                    key={game.id}
                                    groupId={props.groupId}
                                    {...game} 
                                />;
                    })
                )
            }
        </div>
        <div className="list-footer">
            <Link to={`/group/${props.groupId}/game/create/`}>
                <button className="button">Criar pelada</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        games: state.games
    };
};

export default connect(mapStateToProps)(GameList);
