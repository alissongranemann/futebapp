import database from 'firebase/firebase'

export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    group
});

export const startAddGroup = (groupData = {}) => {
    return (dispatch) => {
        const {
            name = ''
        } = groupData;
        const group = { name, players, games };

        database.ref('groups').push(group).then((ref) => {
            dispatch(addGroup({
                id: ref.key,
                ...group
            }));
        });
    };
};

export const removeGroup = ({ id } = {}) => ({
    type: 'REMOVE_GROUP',
    id
});

export const startRemoveGroup = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`groups/${id}`).remove().then(() => {
            dispatch(removeGroup({ id }));
        });
    };
};

export const editGroup = (id, updates) => ({
    type: 'EDIT_GROUP',
    id,
    updates
});

export const startEditGroup = (id, updates) => {
    return (dispatch) => {
        return database.ref(`groups/${id}`).update(updates).then(() => {
            dispatch(editGroup(id, updates));
        });
    }
};

export const setGroups = (groups) => ({
    type: 'SET_GROUPS',
    groups
});

export const startSetGroups = () => {
    return (dispatch) => {
        return database.ref('groups').once('value').then((snapshot) => {
            const groups = [];

            snapshot.forEach((childSnapshot) => {
                groups.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setGroups(groups));
        });
    };
};
