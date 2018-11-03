import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

export const ListItemAction = (props) => {
    const { onEdit, onRemove } = props;

    return (
        <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={onEdit}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={onRemove}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    );
};

export default ListItemAction;
