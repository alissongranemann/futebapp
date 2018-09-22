import uuid from 'uuid';
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

export const editGroup = (id, updates) => ({
    type: 'EDIT_GROUP',
    id,
    updates
});

// SET_EXPENSES
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
  
export const addGame = (
    groupId = '',
    {
        id = '',
        location = '',
        numPlayers = -1,
        date = '',
        schedule = ''
    }
) => ({
    type: 'ADD_GAME',
    groupId,
    game: {
        id: id ? id : uuid(),
        location,
        numPlayers,
        date,
        schedule
    }
});

export const addPlayer = (
    groupId = '',
    {
        id = '',
        name = ''
    }
) => ({
    type: 'ADD_PLAYER',
    groupId,
    player: {
        id: id ? id : uuid(),
        name
    }
});
