import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveGroup } from 'actions/groups';

export class GroupListItem extends React.Component {
    
    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGroup({ id: this.props.id });
    };

    render() {
        return (
            <Link className="list-item" to={`/group/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                <img className="delete-button" src="/images/icons/delete-button.svg" onClick={this.onRemove} />
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGroup: (data) => dispatch(startRemoveGroup(data))
});

export default connect(undefined, mapDispatchToProps)(GroupListItem);
