import React from 'react';
import { connect } from 'react-redux';
import GroupListItem from './GroupListItem';
import { Link } from 'react-router-dom';

const GroupList = (props) => (
    <div className="content-container">
        <h3 className="list__title">Seus grupos</h3>
        <div className="list-body">
        {
            props.groups.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>Sem grupos</span>
                </div>
            ) : (
                props.groups.map((group) => {
                    return <GroupListItem key={group.id} {...group} />;
                })
            )
        }
        </div>
        <div className="list-footer">
            <Link to='/group/create/'>
                <button className="button">Criar grupo</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    };
};

export default connect(mapStateToProps)(GroupList);
