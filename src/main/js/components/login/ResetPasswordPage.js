import React from 'react';
import { connect } from 'react-redux';
import { startResetPassword } from 'actions/auth';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positiveButtonStyles } from 'styles/button';
import { withRouter } from 'react-router';

export class ResetPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
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
        if (!this.state.email) {
            this.setState(() => ({ error: 'Preencha o email.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startResetPassword({
                email: this.state.email,
            }).then(() => {
                this.props.history.push('/');
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
                        Resetar senha
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
                        <br />
                        <Button type="submit" variant="contained" size="large" color='primary' className={classes.button}>
                            Resetar
                        </Button>
                        <br />
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startResetPassword: ({ email }) => dispatch(startResetPassword({ email })),
});

const connectedComponent = connect(undefined, mapDispatchToProps)(ResetPasswordPage);
const styledComponent = withStyles(positiveButtonStyles)(connectedComponent);
export default withRouter(styledComponent);
