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
            schedule = ''
        } = gameData;
        const game = { location, date, schedule };
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

export const startRemoveGame = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`games/${id}`).remove().then(() => {
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
