import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './PlayerListItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { positiveButtonStyles } from 'styles/button'
import Typography from '@material-ui/core/Typography';

const PlayerList = (props) => {
    const { classes } = props;
    return (
        <div className="content-container">
            <Typography variant="h5" gutterBottom>
                JOGADORES
            </Typography>
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
export default withStyles(positiveButtonStyles)(connectedComponent);
