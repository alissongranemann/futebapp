import database from 'service/firebase'
import { addGame } from './games';
import { addPlayer } from './players';

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
        return database.ref('users').child(`${user}/groups`).once('value').then((userGroupsSnapshot) => {
            var groupPromises = [];
            userGroupsSnapshot.forEach(function (userGroupSnapshot) {
                var groupPromise = database.ref('groups').child(userGroupSnapshot.key).once('value').then((groupSnapshot) => {
                    var value = groupSnapshot.val();
                    const group = {
                        id: groupSnapshot.key,
                        ...value
                    };
                    dispatch(addGroup(group));
                    for (var key in value.games){
                        database.ref('games').child(key).once('value').then((gameSnapshot) => {
                            const game = {
                                id: gameSnapshot.key,
                                ...gameSnapshot.val()
                            };
                            dispatch(addGame(game));
                        });
                    }
                    for (var key in value.players) {
                        database.ref('players').child(key).once('value').then((playerSnapshot) => {
                            const player = {
                                id: playerSnapshot.key,
                                ...playerSnapshot.val()
                            };
                            dispatch(addPlayer(player));
                        });
                    }
                });
                groupPromises.push(groupPromise);
            });
            return Promise.all(groupPromises);
        });
    };
};
