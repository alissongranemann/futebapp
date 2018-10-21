import React from 'react';
import { connect } from 'react-redux';
import GameListItem from './GameListItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { positiveButtonStyles } from 'styles/button'
import Typography from '@material-ui/core/Typography';

const GameList = (props) => {
    const { classes } = props;

    return (
        <div className="content-container">
            <Typography variant="h5" gutterBottom>
                PELADAS
            </Typography>
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
                    <Button variant="contained" size="large" color='primary' className={classes.button}>
                        Criar pelada
                    </Button>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        games: state.games
    };
};

const connectedComponent = connect(mapStateToProps)(GameList);
export default withStyles(positiveButtonStyles)(connectedComponent);
