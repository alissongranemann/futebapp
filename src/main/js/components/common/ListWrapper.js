import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import PositiveActionButton from './PositiveActionButton';

export const ListWrapper = (props) => {
    const {
        title, createButtonLabel, createLink, children,
    } = props;

    return (
        <div className="content-container list">
            <Typography variant="h5" gutterBottom>
                {title.toUpperCase()}
            </Typography>
            <List className="list__body">
                {children}
            </List>
            <div className="list__footer">
                <Link to={createLink}>
                    <PositiveActionButton label={createButtonLabel} />
                </Link>
            </div>
        </div>
    );
};

export default ListWrapper;
