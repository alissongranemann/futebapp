import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditGroup } from 'actions/groups';

export class EditGroupPage extends React.Component {

    onSubmit = (group) => {
        this.props.startEditGroup(this.props.group.id, group);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                <div className="content-container page-header__action">
                        <h1 className="page-header__title">Editar grupo</h1>
                        <button className="header-action-button-wrapper" onClick={this.props.history.goBack}>
                            <img className="header-action-button" src="/images/icons/cancel-button.svg" />
                        </button>
                    </div>
                </div>
                <div className="content-container">
                    <GroupForm
                        group={this.props.group}
                        onSubmit={this.onSubmit}
                    />
                </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);
