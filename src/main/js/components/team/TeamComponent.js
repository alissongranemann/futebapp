import React from 'react';
import Select from 'react-select'

const customStyles = {
    control: styles => ({ ...styles, borderRadius: 0, height: 50 })
};

export class TeamComponent extends React.Component {

    onChange = (selectedValue) => {
        this.props.onPlayerChange(selectedValue.value, this.props.teamIndex);
    };

    render() {
        const availableOptions = this.props.availablePlayers.map((player) => {
            return {
                value: player.name,
                label: player.name
            }
        })
        const options = [{
            value: '',
            label: 'Selecione um jogador...'
        }, ...availableOptions];
        return (
            <div className="team-wrapper">
                <h3>{this.props.name}</h3>
                <Select
                    styles={customStyles}
                    value={options[0]}
                    options={options}
                    onChange={this.onChange}
                />
                <br />
                {
                    this.props.teamPlayers.map((player, index) => {
                        return (
                            <input
                                key={index}
                                disabled
                                type="text"
                                className="text-input"
                                value={player.name}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default TeamComponent;
