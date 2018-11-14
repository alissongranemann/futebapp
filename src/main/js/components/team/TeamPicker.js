import React from 'react';
import Select from 'react-select';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import PlayerList from '../player/PlayerList';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import PlayerListItem from '../player/PlayerListItem';

const styles = {

};

export class TeamPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPlayers: this.props.selectedPlayers,
            selectedOption: null,
        };
    }

    render() {
        const {
            name, className, availablePlayers, handleChange,
        } = this.props;
        const { selectedOption, selectedPlayers } = this.state;
        return (
            <Grid container spacing={24} className={className}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        {name.toUpperCase()}
                    </Typography>
                </Grid>
                {
                    availablePlayers.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                            Não há jogadores no grupo
                        </Typography>
                    ) : (
                        <React.Fragment>
                            {/* <PlayerList
                                players={selectedPlayers}
                                readOnly
                            /> */}
                            <Grid item xs={12}>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    options={availablePlayers.map(player => ({
                                        value: player.name,
                                        label: player.name,
                                    }))}
                                    placeholder="Selecione um jogador"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Paper>
                                    <List className="list__body">
                                        {
                                            selectedPlayers.length === 0 ? (
                                                <Typography variant="subtitle1" align="center" >
                                                        Sem jogadores
                                                </Typography>
                                            ) : (
                                                selectedPlayers
                                                    .map((player, index, arr) => <PlayerListItem
                                                        key={player.id}
                                                        readOnly={true}
                                                        {...player}
                                                        divider={index !== arr.length - 1}
                                                    />)
                                            )
                                        }
                                    </List>
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    )
                }
            </Grid>
        );
    }
}

export default withStyles(styles)(TeamPicker);
