import uuid from 'uuid';
import database from 'firebase/firebase'

export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    group
});

export const startAddGroup = (groupData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            players = [],
            games = []
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
    id,
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
