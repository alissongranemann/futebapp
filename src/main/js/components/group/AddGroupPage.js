import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { addGroup } from 'actions/groups';

const AddGroupPage = (props) => (
  <div>
    <h1>Criar grupo</h1>
    <GroupForm
      onSubmit={(group) => {
        props.dispatch(addGroup(group));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddGroupPage);
