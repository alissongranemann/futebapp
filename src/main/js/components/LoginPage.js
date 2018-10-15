import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook, startLoginEmail } from 'actions/auth';
import { Link } from 'react-router-dom';

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
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
            });
        }
    };

    onForgotPassword = (e) => {
        e.preventDefault();
    }

    render() {
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
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Email"
                                onChange={this.onEmailChange}
                            />
                            <input
                                type="password"
                                className="text-input"
                                placeholder="Senha"
                                onChange={this.onPasswordChange}
                            />
                            <a onClick={this.onForgotPassword}>Esqueceu sua senha?</a>
                            <br />
                            <button className="button">Entrar</button>
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

export default connect(undefined, mapDispatchToProps)(LoginPage);
