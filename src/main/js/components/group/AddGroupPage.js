import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startAddGroup } from 'actions/groups';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

export class AddGroupPage extends React.Component {

    onSubmit = (group) => {
        this.props.startAddGroup(group);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                <div className="content-container page-header__action">
                        <Typography variant="h4">
                            CRIAR GRUPO
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <div className="content-container">
                    <GroupForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddGroup: (group) => dispatch(startAddGroup(group))
});

export default connect(undefined, mapDispatchToProps)(AddGroupPage);
