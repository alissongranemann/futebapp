import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveGroup } from 'actions/groups';

export class GroupListItem extends React.Component {
    
    constructor(props) {
        super(props);
    }

    onRemove = (e) => {
        this.props.startRemoveGroup({ id: this.props.id });
        this.props.history.push('/');
        e.stopPropagation();
    };

    render() {
        return (
            <Link className="list-item" to={`/group/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                <button onClick={this.onRemove}>Remove</button>
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemoveGroup: (data) => dispatch(startRemoveGroup(data))
});

export default connect(undefined, mapDispatchToProps)(GroupListItem);
