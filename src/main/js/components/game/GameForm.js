import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TeamComponent from '../team/TeamComponent';

export default class GameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.game ? props.game.location : '',
            date: props.game ? moment(props.game.date) : moment(),
            schedule: props.game ? moment(props.game.schedule) : moment(),
            availablePlayers: props.players,
            teams: props.game ? props.game.teams : [
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
    onScheduleChange = (schedule) => {
        if (schedule) {
            this.setState(() => ({ schedule }));
        }
    };
    onPlayerChange = (selectedPlayer) => {
        var value = selectedPlayer.value;
        var teams = this.state.teams;
        var team = teams.find((team) => team.name === value.teamName);
        team.players = [...team.players, selectedPlayer];
        var availablePlayers = this.state.availablePlayers.filter(player => value.name !== player.name);
        this.setState(() => ({availablePlayers, teams}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.location || !this.state.date || !this.state.schedule) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                location: this.state.location,
                date : this.state.date.valueOf(),
                schedule : this.state.schedule.valueOf()
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Localização"
                        value={this.state.location}
                        onChange={this.onLocationChange}
                    />
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.onDateChange}
                    />
                    <DatePicker
                        selected={this.state.schedule}
                        onChange={this.onScheduleChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="LT"
                        timeCaption="Time"
                    />
                    {this.state.teams.map((team, index) => (
                        <TeamComponent
                            key={index} 
                            name={team.name}
                            availablePlayers={this.state.availablePlayers}
                            teamPlayers={team.players}
                            onPlayerChange={this.onPlayerChange}
                        />
                    ))}
                    <div><button>Salvar</button></div>
                </form>
            </div>
        )
    }
}
