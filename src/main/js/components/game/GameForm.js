import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { InlineTimePicker } from 'material-ui-pickers/TimePicker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';
import Grid from '@material-ui/core/Grid';
import combineStyles from 'styles/utils/combineStyles';
import TeamComponent from '../team/TeamComponent';

moment.locale('pt-br');

const styles = {
    buttonItem: {
        alignSelf: 'flex-end',
    },
};

export class GameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.game ? props.game.location : '',
            date: props.game ? moment(props.game.date) : moment(),
            time: props.game ? moment(props.game.time) : moment(),
            availablePlayers: props.game ? props.game.availablePlayers : props.players,
            teams: props.game ? props.game.teams : [
                {
                    name: 'Time A',
                    players: [],
                },
                {
                    name: 'Time B',
                    players: [],
                },
            ],
            error: '',
        };
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onDateChange = (selectedDate) => {
        if (selectedDate) {
            this.setState(() => ({ date: selectedDate.toDate() }));
        }
    };

    onTimeChange = (selectedTime) => {
        if (selectedTime) {
            this.setState(() => ({ time: selectedTime.toDate() }));
        }
    };

    onPlayerChange = (value, teamIndex) => {
        const team = this.state.teams[teamIndex];
        const selectedPlayer = { name: value };
        team.players = [...team.players, selectedPlayer];
        const availablePlayers = this.state.availablePlayers.filter(player => value !== player.name);
        this.setState(() => ({ availablePlayers }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.location || !this.state.date || !this.state.time) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                location: this.state.location,
                date: this.state.date.valueOf(),
                time: this.state.time.valueOf(),
                teams: this.state.teams,
                availablePlayers: this.state.availablePlayers,
            });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={16}>
                {this.state.error && <p>{this.state.error}</p>}
                <Grid item xs={12}>
                    <TextField
                        label="Localização *"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('location')}
                        value={this.state.location}
                        InputLabelProps={{
                            classes: {
                                root: classes.resize,
                            },
                        }}
                        InputProps={{
                            classes: {
                                input: classes.resize,
                            },
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                        <InlineDatePicker
                            label="Dia *"
                            // autoOk
                            value={this.state.date}
                            onChange={this.onDateChange}
                            disablePast
                            variant="outlined"
                            locale={'pt-br'}
                            format="DD/MM/YY"
                            fullWidth
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                        <InlineTimePicker
                            label="Hora *"
                            ampm={false}
                            clearable
                            value={this.state.time}
                            onChange={this.onTimeChange}
                            variant="outlined"
                            fullWidth
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                    {this.state.teams.map((team, index) => (
                        <TeamComponent
                            key={index}
                            teamIndex={index}
                            name={team.name}
                            availablePlayers={this.state.availablePlayers}
                            teamPlayers={team.players}
                            onPlayerChange={this.onPlayerChange}
                        />
                    ))}
                </Grid>
                <Grid item xs={3} className={classes.buttonItem}>
                    <Button
                        variant="contained"
                        size="large"
                        color='primary'
                        className={classes.button}
                        onClick={this.onSubmit}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players,
});


const connectedComponent = connect(mapStateToProps)(GameForm);
export default withStyles(combineStyles(styles, positiveButtonStyles))(connectedComponent);
