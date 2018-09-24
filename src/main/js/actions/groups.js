import database from 'firebase/firebase'

export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    group
});

export const startAddGroup = (groupData = {}) => {
    return (dispatch, getState) => {
        const user = getState().auth.uid;
        const {
            name = ''
        } = groupData;
        const group = { name };

        database.ref('groups').push(group).then((ref) => {
            // ref.child(`users/${user}`).set(true);
            database.ref(`users/${user}/groups/${ref.key}`).set(true);
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
    return (dispatch, getState) => {
        const user = getState().auth.uid;
        console.log(id);
        return database.ref(`groups/${id}`).remove().then(() => {
            database.ref(`users/${user}/groups/${id}`).remove();
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
        console.log(id);
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
    return (dispatch, getState) => {
        const user = getState().auth.uid;
        return database.ref('users').child(`${user}/groups`).once('value').then((groupsSnapshot) => {
            groupsSnapshot.forEach(function (groupSnapshot) {
                //TODO wait all groups
                database.ref('groups').child(groupSnapshot.key).once('value').then((snapshot) => {
                    const group = {
                        id: snapshot.key,
                        ...snapshot.val()
                    };
                    dispatch(addGroup(group));
                    // TODO load games
                    // TODO load players
                });
            });
        });
    };
};
