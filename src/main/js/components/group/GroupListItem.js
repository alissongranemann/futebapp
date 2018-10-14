import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveGroup } from 'actions/groups';
import { withRouter } from "react-router";

export class GroupListItem extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.startRemoveGroup({ id: this.props.id });
    };

    onEdit = (e) => {
        e.preventDefault();
        this.props.history.push(`/group/edit/${this.props.id}`);
    }

    render() {
        return (
            <Link className="list-item" to={`/group/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                <div className="action-row">
                    <button className="action-button-wrapper" onClick={this.onEdit}>
                        <img className="action-button" src="/images/icons/edit-button.svg" />
                    </button>
                    <button className="action-button-wrapper" onClick={this.onRemove}>
                        <img className="action-button" src="/images/icons/delete-button.svg" />
                    </button>
                </div>
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGroup: (data) => dispatch(startRemoveGroup(data))
});

export default withRouter(connect(undefined, mapDispatchToProps)(GroupListItem));
