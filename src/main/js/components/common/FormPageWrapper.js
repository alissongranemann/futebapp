import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withRouter } from 'react-router-dom';

export class FormPageWrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-header">
                    <div className="content-container page-header__action">
                        <Typography variant="h4">
                            {this.props.title.toUpperCase()}
                        </Typography>
                        <IconButton aria-label="Cancel" onClick={this.props.history.goBack}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <div className="content-container">
                    {this.props.children}
                </div>
            </React.Fragment >
        );
    }
}

export default withRouter(FormPageWrapper);
