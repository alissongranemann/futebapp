import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { Paper } from '@material-ui/core';
import ListWrapper from '../common/ListWrapper';
import GameListItem from './GameListItem';

const GameList = props => (
    <ListWrapper
        title="Peladas"
        createLink={`/group/${props.groupId}/game/create/`}
        createButtonLabel="Criar pelada"
    >
        <Paper>
            <List className="list__body">
                {
                    props.games.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                            Sem peladas
                        </Typography>
                    ) : (
                        props.games.map((game, index, arr) => <GameListItem
                            key={game.id}
                            groupId={props.groupId}
                            {...game}
                            divider={index !== arr.length - 1}
                        />)
                    )
                }
            </List>
        </Paper>
    </ListWrapper>
);

const mapStateToProps = (state, props) => ({
    games: state.games.filter(game => game.group === props.groupId),
});

export default connect(mapStateToProps)(GameList);
