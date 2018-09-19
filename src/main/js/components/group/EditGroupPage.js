import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { editGroup, removeGroup } from 'actions/groups';

const EditGroupPage = (props) => {
  return (
    <div>
      <GroupForm
        group={props.group}
        onSubmit={(group) => {
          props.dispatch(editGroup(props.group.id, group));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeGroup({ id: props.group.id }));
        props.history.push('/');
      }}>Remover</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    group: state.groups.find((group) => group.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditGroupPage);
