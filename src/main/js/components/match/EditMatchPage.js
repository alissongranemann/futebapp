import React from 'react';
import { connect } from 'react-redux';
import { startEditMatch } from 'actions/matches';
import MatchForm from './MatchForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class EditMatchPage extends React.Component {
    onSubmit = (match) => {
        this.props.startEditMatch(this.props.match.id, match);
        this.props.history.goBack();
    };

    render() {
        return (
            <FormPageWrapper title="Editar pelada">
                <MatchForm
                    match={this.props.match}
                    onSubmit={this.onSubmit}
                />
            </FormPageWrapper>
        );
    }
}

const mapStateToProps = (state, props) => ({
    match: state.matches.find(match => match.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditMatch: (id, match) => dispatch(startEditMatch(id, match)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMatchPage);
