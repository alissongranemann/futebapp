import React from 'react';
import { connect } from 'react-redux';
import { startRemoveMatch } from 'actions/matches';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import moment from 'moment';
import ListItemAction from '../common/ListItemAction';

export class MatchListItem extends React.Component {
    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveMatch({ id: this.props.id, groupId: this.props.groupId });
    };

    render() {
        return (
            <ListItem divider={this.props.divider}>
                <ListItemText
                    primary={this.props.location}
                    secondary={
                        `${moment(this.props.date).format('DD/MM/YY')} -
                            ${moment(this.props.time).format('HH:mm')}`
                    }
                />
                <ListItemAction
                    editLink={`/match/edit/${this.props.id}`}
                    onRemove={this.onRemove}
                />
            </ListItem>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startRemoveMatch: data => dispatch(startRemoveMatch(data)),
});

export default connect(undefined, mapDispatchToProps)(MatchListItem);
