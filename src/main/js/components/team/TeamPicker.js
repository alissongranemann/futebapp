import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import PlayerList from '../player/PlayerList';

const styles = {

};

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
                <Typography variant="h5">
                    {name.toUpperCase()}
                </Typography>
                {
                    availablePlayers.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                            Não há jogadores no grupo
                        </Typography>
                    ) : (
                        <React.Fragment>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={availablePlayers.map(player => ({
                                    value: player.name,
                                    label: player.name,
                                }))}
                                placeholder="Selecione um jogador"
                            />
                            <PlayerList
                                players={selectedPlayers}
                                readOnly
                            />
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}

export default withStyles(styles)(TeamPicker);
