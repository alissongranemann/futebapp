import React from 'react';
import moment from 'moment';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { InlineTimePicker } from 'material-ui-pickers/TimePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import {
    TextField, Grid, Stepper, Step, StepLabel, StepContent, Button, withStyles,
} from '@material-ui/core';
import TeamComponent from '../team/TeamComponent';

moment.locale('pt-br');

const styles = theme => ({
    root: {
        padding: 0,
    },
    step: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        color: 'white',
        marginLeft: theme.spacing.unit,
    },
    actionsContainer: {
        marginTop: theme.spacing.unit * 3,
        float: 'right',
    },
});

export class MatchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: props.match ? props.match.location : '',
            date: props.match ? moment(props.match.date) : null,
            time: props.match ? moment(props.match.time) : null,
            duration: props.match ? props.match.duration.toString() : '',
            vacancy: props.match ? props.match.vacancy.toString() : '',
            activeStep: 0,
            error: '',
        };
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };


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

    getSteps = () => ['Preencher os dados da pelada', 'Escolher os times'];

    getStepOne = () => {
        const {
            location, date, time, duration, vacancy, error,
        } = this.state;
        return (
            <Grid container spacing={16}>
                {error && <p>{error}</p>}
                <Grid item xs={12}>
                    <TextField
                        label="Localização *"
                        placeholder="Clube do Zé"
                        margin="none"
                        variant="outlined"
                        onChange={this.handleChange('location')}
                        value={location}
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
                            value={date}
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
                            value={time}
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
                        value={duration}
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
                        value={vacancy}
                        fullWidth
                    />
                </Grid>
            </Grid>
        );
    }

    getStepContent = (step) => {
        switch (step) {
        case 0:
            return this.getStepOne();
        case 1:
            return <TeamComponent />;
        default:
            return 'Passo inválido';
        }
    }

    render() {
        const steps = this.getSteps();
        const { activeStep } = this.state;
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Stepper activeStep={activeStep} orientation="vertical" className={classes.root}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent className={classes.step}>
                                {this.getStepContent(index)}
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                        >
                                            Voltar
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Salvar' : 'Próximo'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(MatchForm);
