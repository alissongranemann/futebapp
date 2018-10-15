import React from 'react';
import { connect } from 'react-redux';
import { startConfirmResetPassword } from 'actions/auth';

export class ConfirmResetPasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            code: '',
            newPassword: '',
            error: ''
        };
    }

    onCodeChange = (e) => {
        const code = e.target.value;
        this.setState(() => ({ code }));
    };

    onNewPasswordChange = (e) => {
        const newPassword = e.target.value;
        this.setState(() => ({ newPassword }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.code || !this.state.newPassword) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startConfirmResetPassword({
                code: this.state.code,
                newPassword: this.state.newPassword
            }).catch((err) => {
                this.setState(() => ({ error: err.message }));
            });;
        }
    };

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__wrap_box">
                    <span className="box-layout__title">
                        Resetar senha
                    </span>
                        <form className="login-form" onSubmit={this.onSubmit}>
                            {this.state.error && <p>{this.state.error}</p>}
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Código"
                                onChange={this.onCodeChange}
                            />
                            <input
                                type="password"
                                className="text-input"
                                placeholder="Nova senha"
                                onChange={this.onNewPasswordChange}
                            />
                            <br />
                            <button className="button">Resetar</button>
                        </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startConfirmResetPassword: ({ code, newPassword }) => dispatch(startConfirmResetPassword({ code, newPassword })),
});

export default connect(undefined, mapDispatchToProps)(ConfirmResetPasswordPage);
