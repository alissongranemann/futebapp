import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { positiveButtonStyles } from 'styles/button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import combineStyles from 'styles/utils/combineStyles';
import GameListItem from './GameListItem';

const styles = {
    list: {
        padding: 0,
    },
};

const GameList = (props) => {
    const { classes } = props;

    return (
        <div className="content-container">
            <Typography variant="h5" gutterBottom>
                PELADAS
            </Typography>
            <Paper>
                <List className={classes.list}>
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

const mapStateToProps = state => ({
    games: state.games,
});

const connectedComponent = connect(mapStateToProps)(GameList);
export default withStyles(combineStyles(styles, positiveButtonStyles))(connectedComponent);
