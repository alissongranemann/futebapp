import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';
import { Link } from 'react-router-dom';

const PlayerList = (props) => (
    <div className="content-container">
        <h3 className="list__title">Jogadores</h3>
        <div className="list-body">
            {
                props.players.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>Sem jogadores</span>
                    </div>
                ) : (
                    props.players.map((player) => {
                        return <PlayerListItem 
                                    key={player.id}
                                    groupId={props.groupId}
                                    {...player} 
                                />;
                    })
                )
            }
        </div>
        <div className="list-footer">
            <Link to={`/group/${props.groupId}/player/create/`}>
                <button className="button">Adicionar jogador</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps)(PlayerList);
