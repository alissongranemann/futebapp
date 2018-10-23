import React from 'react';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ReactDOM from 'react-dom';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export class TeamComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            labelWidth: 0
        };
    }

    onChange = (event) => {
        this.props.onPlayerChange(event.target.value, this.props.teamIndex);
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    render() {
        return (
            <div className="team-wrapper">
                <h3>{this.props.name}</h3>
                <FormControl variant="outlined">
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-simple"
                    >
                        Jogador
                    </InputLabel>
                    <Select
                        value=''
                        name='player'
                        onChange={this.onChange}
                        displayEmpty
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                            />
                        }
                    >
                        {
                            this.props.availablePlayers.map((player, index) => {
                                return <MenuItem
                                    key={index}
                                    value={player.name}
                                >
                                    {player.name}
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <br />
                {
                    this.props.teamPlayers.map((player, index) => {
                        return (
                            <TextField
                                key={index}
                                margin="normal"
                                variant="outlined"
                                name='name'
                                value={player.name}
                                disabled
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default TeamComponent;
