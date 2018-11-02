import React from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';

export class GroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.group ? props.group.name : '',
            error: '',
        };
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
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
        const { classes } = this.props;

        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <TextField
                    label="Nome *"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange('name')}
                    value={this.state.name}
                    InputLabelProps={{
                        classes: {
                            root: classes.resize,
                        },
                    }}
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                />
                <div className="form-footer">
                    <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                        Salvar
                    </Button>
                </div>
            </form>
        );
    }
}

export default withStyles(positiveButtonStyles)(GroupForm);
