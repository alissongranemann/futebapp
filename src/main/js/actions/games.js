import database from 'service/firebase'

export const addGame = (game) => ({
    type: 'ADD_GAME',
    game
});

export const startAddGame = (groupId = '', gameData = {}) => {
    return (dispatch) => {
        const {
            location = '',
            date = '',
            time = ''
        } = gameData;
        const game = { location, date, time, group: groupId };
        return database.ref("games").push(game).then((ref) => {
            database.ref(`groups/${groupId}/games/${ref.key}`).set(true);
            dispatch(addGame({
                id: ref.key,
                ...game
            }));
        });
    };
};

export const removeGame = ({ id } = {}) => ({
    type: 'REMOVE_GAME',
    id
});

export const startRemoveGame = ({ id, groupId } = {}) => {
    return (dispatch) => {
        return database.ref(`games/${id}`).remove().then(() => {
            database.ref(`groups/${groupId}/games/${id}`).remove();
            dispatch(removeGame({ id }));
        });
    };
};

export const editGame = (id, updates) => ({
    type: 'EDIT_GAME',
    id,
    updates
});

export const startEditGame = (id, updates) => {
    return (dispatch) => {
        return database.ref(`games/${id}`).update(updates).then(() => {
            dispatch(editGame(id, updates));
        });
    }
};
