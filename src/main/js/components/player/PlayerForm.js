import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ReactDOM from 'react-dom';

const positions = [
    'GOLEIRO', 'ZAGUEIRO', 'LATERAL', 'MEIA', 'ATACANTE'
];

export class PlayerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.player ? props.player.name : '',
            position: props.player ? props.player.position : '',
            labelWidth: 0,
            error: ''
        };
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
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
                position: this.state.position
            });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <TextField
                    label="Nome *"
                    margin="normal"
                    variant="outlined"
                    name='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <FormControl variant="outlined">
                    <InputLabel
                        ref={ref => {
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
                            positions.map((position, index) => {
                                return <MenuItem
                                    key={index}
                                    value={position}
                                >
                                    {position}
                                </MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <div className="form-footer">
                    <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                        Salvar
                    </Button>
                </div>

            </form>
        )
    }
}

export default withStyles(positiveButtonStyles)(PlayerForm);