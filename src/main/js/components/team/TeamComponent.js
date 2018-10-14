import React from 'react';

export class TeamComponent extends React.Component {

    onChange = event => {
        this.props.onPlayerChange(event.target.value, this.props.index);
    }

    render() {
        return (
            <div className="team-wrapper">
                <h3>{this.props.name}</h3>
                {
                    this.props.teamPlayers.map((player, index) => (
                        <select
                            key={index}
                            value={player.name}
                            onChange={this.onChange}
                            className="select"
                        >
                            <option value={player.name}>{player.name}</option>
                            {
                                this.props.availablePlayers.map((player, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={player.name}
                                        >
                                            {player.name}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    ))
                }
            </div>
        )
    }
}

export default TeamComponent;
