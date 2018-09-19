import React from 'react';
import Select from 'react-select'

export default class TeamComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {this.props.teamPlayers.map((player, index) => (
                    <Select
                        key={index}
                        value={player}
                        options={this.props.availablePlayers.map((player) => {
                            return {
                                value: {teamName: this.props.name, ...player}, 
                                label: player.name
                            }
                        })} 
                        onChange={this.props.onPlayerChange}
                    />
                ))}
            </div>
        )
    }
}
