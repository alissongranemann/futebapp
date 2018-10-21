import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const LoadingPage = () => (
    <div className="loader">
        <CircularProgress color="primary" style={{ color: green[500] }} size={75} thickness={5} />
    </div>
);

export default LoadingPage;
