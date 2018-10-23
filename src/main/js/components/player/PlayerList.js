import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { positiveButtonStyles } from 'styles/button'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import combineStyles from 'styles/utils/combineStyles';

const styles = {
    list: {
        padding: 0
    }
}

const PlayerList = (props) => {
    const { classes } = props;
    return (
        <div className="content-container">
            <Typography variant="h5" gutterBottom>
                JOGADORES
            </Typography>
            <Paper>
                <List className={classes.list}>
                    {
                        props.players.length === 0 ? (
                            <Typography variant="subtitle1" align="center" >
                                Sem jogadores
                            </Typography>
                        ) : (
                                props.players.map((player, index, arr) => {
                                    return <PlayerListItem
                                        key={player.id}
                                        groupId={props.groupId}
                                        {...player}
                                        divider={index !== arr.length-1}
                                    />;
                                })
                            )
                    }
                </List>
            </Paper>
            <div className="list-footer">
                <Link to={`/group/${props.groupId}/player/create/`}>
                    <Button variant="contained" size="large" color='primary' className={classes.button}>
                        Adicionar jogador
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

const connectedComponent = connect(mapStateToProps)(PlayerList);
export default withStyles(combineStyles(styles, positiveButtonStyles))(connectedComponent);
