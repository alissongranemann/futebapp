import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import PageWithHeader from './PageWithHeader';

const FormPageWrapper = props => (
    <React.Fragment>
        <PageWithHeader
            onClickHeaderAction={props.history.goBack}
            {...props}
        />
    </React.Fragment >
);

export default withRouter(FormPageWrapper);
