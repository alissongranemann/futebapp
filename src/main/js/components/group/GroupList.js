import React from 'react';
import { connect } from 'react-redux';
import GroupListItem from './GroupListItem';
import { Link } from 'react-router-dom';

const GroupList = (props) => (
    <div>
        <h3>Grupos</h3>
        {props.groups.map((group) => {
            return <GroupListItem key={group.id} {...group} />;
        })}
        <Link to='/group/create/'>
            <button>Criar grupo</button>
        </Link>
    </div>
);

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    };
};

export default connect(mapStateToProps)(GroupList);
