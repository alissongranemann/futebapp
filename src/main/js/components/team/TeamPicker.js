import React from 'react';
import Select from 'react-select';

export class TeamPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
        };
    }

    render() {
        const {
            name, className, selectedPlayers, availablePlayers, handleChange,
        } = this.props;
        const { selectedOption } = this.state;
        return (
            <div className={className}>
                {name}
                <div>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        // TODO: availablePlayers === 0
                        options={availablePlayers.map(player => ({
                            value: player.name,
                            label: player.name,
                        }))}
                        placeholder="Selecione um jogador"
                    />
                </div>
                <div>
                    <ul>
                        {
                            selectedPlayers.length !== 0
                            && selectedPlayers.map(
                                (player, index) => <li key={index}>{player.name}</li>,
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TeamPicker;
