import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { InlineTimePicker } from 'material-ui-pickers/TimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormWrapper } from '../common/FormWrapper';

moment.locale('pt-br');

export class MatchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.game ? props.game.location : '',
            date: props.game ? moment(props.game.date) : null,
            time: props.game ? moment(props.game.time) : null,
            duration: props.game ? props.game.duration.toString() : '',
            vacancy: props.game ? props.game.vacancy.toString() : '',
            error: '',
        };
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onDateChange = (selectedDate) => {
        if (selectedDate) {
            this.setState(() => ({ date: selectedDate.toDate() }));
        }
    };

    onTimeChange = (selectedTime) => {
        if (selectedTime) {
            this.setState(() => ({ time: selectedTime.toDate() }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.location || !this.state.date || !this.state.time
                || !this.state.duration || !this.state.vacancy) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                location: this.state.location,
                date: this.state.date.valueOf(),
                time: this.state.time.valueOf(),
                duration: parseInt(this.state.duration, 10),
                vacancy: parseInt(this.state.vacancy, 10),
            });
        }
    };

    render() {
        return (
            <FormWrapper
                onSubmit={this.onSubmit}
            >
                <Grid container spacing={16}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <Grid item xs={12}>
                        <TextField
                            label="Localização *"
                            placeholder="Clube do Zé"
                            margin="none"
                            variant="outlined"
                            onChange={this.handleChange('location')}
                            value={this.state.location}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                            <InlineDatePicker
                                label="Dia *"
                                placeholder="01/01/2020"
                                keyboard
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
                                // autoOk
                                value={this.state.date}
                                onChange={this.onDateChange}
                                disablePast
                                variant="outlined"
                                locale={'pt-br'}
                                format="DD/MM/YY"
                                fullWidth
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                            <InlineTimePicker
                                label="Hora *"
                                placeholder="10:00"
                                keyboard
                                mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                                ampm={false}
                                clearable
                                value={this.state.time}
                                onChange={this.onTimeChange}
                                variant="outlined"
                                fullWidth
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Duração (minutos) *"
                            type="number"
                            placeholder="60"
                            margin="none"
                            variant="outlined"
                            onChange={this.handleChange('duration')}
                            value={this.state.duration}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Vagas *"
                            type="number"
                            placeholder="14"
                            margin="none"
                            variant="outlined"
                            onChange={this.handleChange('vacancy')}
                            value={this.state.vacancy}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </FormWrapper>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players,
});

export default connect(mapStateToProps)(MatchForm);
