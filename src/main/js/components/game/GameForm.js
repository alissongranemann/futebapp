import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-times';
import TeamComponent from '../team/TeamComponent';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-times/css/material/default.css';

export class GameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.game ? props.game.location : '',
            date: props.game ? moment(props.game.date) : moment(),
            time: props.game ? moment(props.game.time) : moment(),
            availablePlayers: props.players,
            teams: [
                {
                    name: "Time A",
                    players: [
                        {
                            name: ''
                        }
                    ]
                },
                {
                    name: "Time B",
                    players: [
                        {
                            name: ''
                        }
                    ]
                }
            ],
            error: ''
        };
    }
    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }));
    };
    onDateChange = (date) => {
        if (date) {
            this.setState(() => ({ date }));
        }
    };
    onTimeChange = (options) => {
        if (options) {
            this.setState(() => ({ time: moment(options.hour + ":" + options.minute, "HH:mm") }));
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
                time: this.state.time.valueOf()
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Localização"
                    value={this.state.location}
                    onChange={this.onLocationChange}
                />
                <div className="input-row">
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onDateChange}
                        minDate={moment()}
                        className="text-input__date"
                    />
                    <TimePicker
                        time={this.state.time.format('HH:mm')}
                        onTimeChange={this.onTimeChange}
                    />
                </div>
                {this.state.teams.map((team, index) => (
                    <TeamComponent
                        key={index}
                        index={index}
                        name={team.name}
                        availablePlayers={this.state.availablePlayers}
                        teamPlayers={team.players}
                        onPlayerChange={this.onPlayerChange}
                    />
                ))}
                <div className="form-footer">
                    <button className="button">Salvar</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    players: state.players
});

export default connect(mapStateToProps)(GameForm)