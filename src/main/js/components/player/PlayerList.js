import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import PlayerListItem from './PlayerListItem';

const PlayerList = (props) => {
    const { players, groupId, readOnly } = props;
    return (
        <Paper>
            <List className="list__body">
                {
                    players.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                            Sem jogadores
                        </Typography>
                    ) : (
                        players.map((player, index, arr) => <PlayerListItem
                            key={player.id}
                            groupId={groupId}
                            readOnly={readOnly}
                            {...player}
                            divider={index !== arr.length - 1}
                        />)
                    )
                }
            </List>
        </Paper>
    );
};

const mapStateToProps = (state, props) => ({
    players: state.players.filter(player => player.group === props.groupId),
});

export default connect(mapStateToProps)(PlayerList);
