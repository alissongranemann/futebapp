import React from 'react';
import {
    TextField, FormControl, InputLabel, Grid, Select, MenuItem, OutlinedInput,
} from '@material-ui/core';
import ReactDOM from 'react-dom';
import { FormWrapper } from '../common/FormWrapper';

const positions = [
    'GOLEIRO', 'ZAGUEIRO', 'LATERAL', 'MEIA', 'ATACANTE',
];

export class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.player ? props.player.name : '',
            position: props.player ? props.player.position : '',
            labelWidth: 0,
            error: '',
        };
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.position) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                position: this.state.position,
            });
        }
    };

    render() {
        return (
            <FormWrapper
                onSubmit={this.onSubmit}
                onCancel={this.props.onCancel}
            >
                <Grid container spacing={16} direction='column'>
                    {this.state.error && <p>{this.state.error}</p>}
                    <Grid item xs={12}>
                        <TextField
                            label="Nome *"
                            variant="outlined"
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel
                                ref={(ref) => {
                                    this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-age-simple"
                            >
                                Posição
                            </InputLabel>
                            <Select
                                value={this.state.position}
                                name='position'
                                onChange={this.handleChange}
                                displayEmpty
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                    />
                                }
                            >
                                {
                                    positions.map((position, index) => <MenuItem
                                        key={index}
                                        value={position}
                                    >
                                        {position}
                                    </MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </FormWrapper>
        );
    }
}

export default PlayerForm;
