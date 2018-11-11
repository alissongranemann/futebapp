import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import TeamPicker from './TeamPicker';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    team: {
        width: '100%',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
});

export class TeamComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            availablePlayers: this.props.team ? this.props.team.players : this.props.players,
            teamA: this.props.teamA ? this.props.teamA : [],
            teamB: this.props.teamB ? this.props.teamB : [],
        };
    }

    handleChange = team => (value) => {
        const selectedPlayer = this.state.availablePlayers
            .find(player => player.name === value.value);
        this.state[team].push(selectedPlayer);
        const newAvailablePlayers = this.state.availablePlayers
            .filter(player => player.name !== selectedPlayer.name);
        this.setState({ availablePlayers: newAvailablePlayers });
    }

    render() {
        const { classes } = this.props;
        const { availablePlayers, teamA, teamB } = this.state;
        return (
            <div className={classes.root}>
                <TeamPicker
                    className={classes.team}
                    name="Time A"
                    availablePlayers={availablePlayers}
                    selectedPlayers={teamA}
                    handleChange={this.handleChange('teamA')}
                />
                <TeamPicker
                    className={classes.team}
                    name="Time B"
                    availablePlayers={availablePlayers}
                    selectedPlayers={teamB}
                    handleChange={this.handleChange('teamB')}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players, // TODO: filter
});

export default compose(withStyles(styles), connect(mapStateToProps))(TeamComponent);
