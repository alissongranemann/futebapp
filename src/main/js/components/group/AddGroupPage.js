import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startAddGroup } from 'actions/groups';

const AddGroupPage = (props) => (
  <div>
    <h1>Criar grupo</h1>
    <GroupForm
      onSubmit={(group) => {
        props.startAddGroup(group);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddGroup: (group) => dispatch(startAddGroup(group))
});

export default connect(undefined, mapDispatchToProps)(AddGroupPage);
