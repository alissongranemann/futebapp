import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Link from 'react-router-dom/Link';

const ListItemAction = (props) => {
    const { editLink, onRemove } = props;

    return (
        <ListItemSecondaryAction>
            <Link to={editLink}>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
            </Link>
            <IconButton aria-label="Delete" onClick={onRemove}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    );
};

export default ListItemAction;
