import React from 'react';
import { Link } from 'react-router-dom';

const GroupListItem = ({ id, name }) => (
  <div>
    <Link to={`/group/${id}`}>
      <h3>{name}</h3>
    </Link>
  </div>
);

export default GroupListItem;
