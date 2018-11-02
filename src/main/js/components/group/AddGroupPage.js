import React from 'react';
import { connect } from 'react-redux';
import { startAddGroup } from 'actions/groups';
import GroupForm from './GroupForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class AddGroupPage extends React.Component {
    onSubmit = (group) => {
        this.props.startAddGroup(group);
        this.props.history.push('/');
    };

    render() {
        return (
            <FormPageWrapper title="Criar grupo">
                <GroupForm
                    onSubmit={this.onSubmit}
                    onCancel={this.props.history.goBack}
                />
            </FormPageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    startAddGroup: group => dispatch(startAddGroup(group)),
});

export default connect(undefined, mapDispatchToProps)(AddGroupPage);
