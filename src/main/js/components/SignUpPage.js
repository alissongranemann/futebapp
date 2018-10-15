import React from 'react';
import { connect } from 'react-redux';
import { startSignUp, } from 'actions/auth';

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

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        this.setState(() => ({ confirmPassword }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.password || !this.state.confirmPassword) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else if( this.state.password != this.state.confirmPassword) {
            this.setState(() => ({ error: 'Senha/Confirmar senha não são iguais.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startSignUp({
                email: this.state.email,
                password: this.state.password,
            });
        }
    };

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__wrap_box">
                    <span className="box-layout__title">
                        Entrar
                    </span>
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
                                                        <input
                                type="password"
                                className="text-input"
                                placeholder="Confirmar senha"
                                onChange={this.onConfirmPasswordChange}
                            />
                            <br />
                            <button className="button">Registrar</button>
                        </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSignUp: ({ email, password }) => dispatch(startSignUp({ email, password })),
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);