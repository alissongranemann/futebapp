import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PositiveActionButton from './PositiveActionButton';

const ListWrapper = (props) => {
    const {
        title, createButtonLabel, createLink, children,
    } = props;

    return (
        <div className="content-container list">
            <Typography variant="h5" gutterBottom>
                {title.toUpperCase()}
            </Typography>
            {children}
            <div className="list__footer">
                <Link to={createLink}>
                    <PositiveActionButton label={createButtonLabel} />
                </Link>
            </div>
        </div>
    );
};

export default ListWrapper;
