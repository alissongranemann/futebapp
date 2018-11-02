import React from 'react';
import { connect } from 'react-redux';
import { startEditGroup } from 'actions/groups';
import GroupForm from './GroupForm';
import FormPageWrapper from '../common/FormPageWrapper';

export class EditGroupPage extends React.Component {
    onSubmit = (group) => {
        this.props.startEditGroup(this.props.group.id, group);
        this.props.history.push('/');
    };

    render() {
        return (
            <FormPageWrapper title="Editar grupo">
                <GroupForm
                    group={this.props.group}
                    onSubmit={this.onSubmit}
                    onCancel={this.props.history.goBack}
                />
            </FormPageWrapper>
        );
    }
}

const mapStateToProps = (state, props) => ({
    group: state.groups.find(group => group.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditGroup: (id, group) => dispatch(startEditGroup(id, group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);
