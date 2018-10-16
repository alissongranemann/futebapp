import React from 'react';
import { connect } from 'react-redux';
import { startResetPassword } from 'actions/auth';

export class ResetPasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: ''
        };
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email) {
            this.setState(() => ({ error: 'Preencha o email.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startResetPassword({
                email: this.state.email,
            }).catch((err) => {
                this.setState(() => ({ error: err.message }));
            });
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
                                placeholder="Email"
                                onChange={this.onEmailChange}
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
    startResetPassword: ({ email }) => dispatch(startResetPassword({ email })),
});

export default connect(undefined, mapDispatchToProps)(ResetPasswordPage);
