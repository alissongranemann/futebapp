import React from 'react';
import { connect } from 'react-redux';
import { startAddMatch } from 'actions/matches';
import MatchForm from './MatchForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class AddMatchPage extends React.Component {
    onSubmit = (match) => {
        this.props.startAddMatch(this.props.match.params.groupId, match);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Adicionar pelada">
                <MatchForm
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startAddMatch: (groupId, match) => dispatch(startAddMatch(groupId, match)),
});

export default connect(undefined, mapDispatchToProps)(AddMatchPage);
