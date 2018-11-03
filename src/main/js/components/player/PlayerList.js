import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListWrapper from '../common/ListWrapper';
import PlayerListItem from './PlayerListItem';

const PlayerList = props => (
    <ListWrapper
        title="Jogadores"
        createLink={`/group/${props.groupId}/player/create/`}
        createButtonLabel="Adicionar jogador"
    >
        <Paper>
            <List className="list__body">
                {
                    props.players.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                                Sem jogadores
                        </Typography>
                    ) : (
                        props.players.map((player, index, arr) => <PlayerListItem
                            key={player.id}
                            groupId={props.groupId}
                            {...player}
                            divider={index !== arr.length - 1}
                        />)
                    )
                }
            </List>
        </Paper>
    </ListWrapper>
);

const mapStateToProps = (state, props) => ({
    players: state.players.filter(player => player.group === props.groupId),
});

export default connect(mapStateToProps)(PlayerList);
