import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormWrapper } from '../common/FormWrapper';

export class GroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.group ? props.group.name : '',
            error: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            this.setState(() => ({ error: 'Insira um nome.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
            });
        }
    };

    render() {
        return (
            <FormWrapper
                onSubmit={this.onSubmit}
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
                </Grid>
            </FormWrapper>
        );
    }
}

export default GroupForm;
