import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditGroup, startRemoveGroup } from 'actions/groups';

export class EditGroupPage extends React.Component {
  onSubmit = (group) => {
    this.props.startEditGroup(this.props.group.id, group);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveGroup({ id: this.props.group.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <GroupForm
          group={this.props.group}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    group: state.groups.find((group) => group.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditGroup: (id, group) => dispatch(startEditGroup(id, group)),
  startRemoveGroup: (data) => dispatch(startRemoveGroup(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);
