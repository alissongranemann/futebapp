import React from 'react';
import { connect } from 'react-redux';
import { startEditGroup } from 'actions/groups';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GroupForm from './GroupForm';

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
                        <Typography variant="h4">
                            EDITAR GRUPO
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
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
}

const mapStateToProps = (state, props) => ({
    group: state.groups.find(group => group.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
    startEditGroup: (id, group) => dispatch(startEditGroup(id, group)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);
