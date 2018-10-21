import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { InlineTimePicker } from 'material-ui-pickers/TimePicker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TeamComponent from '../team/TeamComponent';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';

moment.locale('pt-br');

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
                    name: "Time A",
                    players: []
                },
                {
                    name: "Time B",
                    players: []
                }
            ],
            error: ''
        };
    }

    handleChange = name => event => {
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
        var team = this.state.teams[teamIndex];
        var selectedPlayer = { name: value };
        team.players = [...team.players, selectedPlayer];
        var availablePlayers = this.state.availablePlayers.filter(player => value !== player.name);
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
                availablePlayers: this.state.availablePlayers
            });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <TextField
                    label="Localização *"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('location')}
                    value={this.state.location}
                    InputLabelProps={{
                        classes: {
                            root: classes.resize,
                        }
                    }}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        }
                    }}
                />
                    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                        <div className="input-row">
                            <InlineDatePicker
                                label="Dia *"
                                // autoOk
                                value={this.state.date}
                                onChange={this.onDateChange}
                                disablePast
                                variant="outlined"
                                locale={'pt-br'}
                                format="DD/MM/YY"
                            />
                            <InlineTimePicker
                                label="Hora *"
                                ampm={false}
                                clearable
                                value={this.state.time}
                                onChange={this.onTimeChange}
                                variant="outlined"
                            />
                        </div>
                    </MuiPickersUtilsProvider>
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
                <div className="form-footer">
                    <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                        Salvar
                    </Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    players: state.players
});


const connectedComponent = connect(mapStateToProps)(GameForm)
export default withStyles(positiveButtonStyles)(connectedComponent);