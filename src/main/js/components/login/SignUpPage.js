import React from 'react';
import { connect } from 'react-redux';
import { startSignUp } from 'actions/auth';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';

export class SignUpPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.password || !this.state.confirmPassword) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else if( this.state.password !== this.state.confirmPassword) {
            this.setState(() => ({ error: 'Senha/Confirmar senha não são iguais.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startSignUp({
                email: this.state.email,
                password: this.state.password
            }).catch((err) => {
                this.setState(() => ({ error: err.message }));
            });;
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="box-layout">
                <div className="box-layout__wrap_box">
                    <span className="box-layout__title">
                        Novo usuário
                    </span>
                        <form className="login-form" onSubmit={this.onSubmit}>
                            {this.state.error && <p>{this.state.error}</p>}
                            <TextField
                                label="Email *"
                                margin="normal"
                                variant="outlined"
                                name='email'
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <TextField
                                label="Senha *"
                                margin="normal"
                                variant="outlined"
                                name='password'
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <TextField
                                label="Confirmar senha *"
                                margin="normal"
                                variant="outlined"
                                name='confirmPassword'
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.confirmPassword}
                            />
                            <br />
                            <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                                Registrar
                            </Button>
                            <br />
                        </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSignUp: ({ email, password }) => dispatch(startSignUp({ email, password })),
});

const connectedComponent = connect(undefined, mapDispatchToProps)(SignUpPage);
export default withStyles(positiveButtonStyles)(connectedComponent);