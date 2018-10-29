import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook, startLoginEmail } from 'actions/auth';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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
        if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startLoginEmail({
                email: this.state.email,
                password: this.state.password,
            }).catch((err) => {
                this.setState(() => ({ error: err.message }));
            });
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="box-layout">
                <div className="box-layout__wrap_box">
                    <span className="box-layout__title">
                        Entrar
                    </span>
                    <div className="box-layout__box">
                        <div className="input-row__even">
                            <a
                                className="google_btn"
                                onClick={this.props.startLoginGoogle}>
                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                                Google
                            </a>
                            <a
                                className="face_btn"
                                onClick={this.props.startLoginFacebook}>
                                <i className="fa fa-facebook-official"></i>
                                Facebook
                            </a>
                        </div>
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
                            <Link to="/reset">Esqueceu sua senha?</Link>
                            <br />
                            <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                                Entrar
                            </Button>
                            <div className="login-footer">
                                <p>Não tem conta?</p>
                                <Link to="/signup">Registrar-se</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginEmail: ({ email, password }) => dispatch(startLoginEmail({ email, password })),
});

const connectedComponent = connect(undefined, mapDispatchToProps)(LoginPage);
export default withStyles(positiveButtonStyles)(connectedComponent);