import database from 'service/firebase';

export const addPlayer = player => ({
    type: 'ADD_PLAYER',
    player,
});

export const startAddPlayer = (groupId = '', playerData = {}) => (dispatch) => {
    const {
        name = '',
        position = '',
    } = playerData;
    const player = { name, position, group: groupId };
    return database.ref('players').push(player).then((ref) => {
        database.ref(`groups/${groupId}/players/${ref.key}`).set(true);
        dispatch(addPlayer({
            id: ref.key,
            ...player,
        }));
    });
};

export const removePlayer = ({ id } = {}) => ({
    type: 'REMOVE_PLAYER',
    id,
});

export const startRemovePlayer = ({ id, groupId } = {}) => dispatch => database.ref(`players/${id}`).remove().then(() => {
    dispatch(removePlayer({ id }));
    database.ref(`groups/${groupId}/players/${id}`).remove();
});

export const editPlayer = (id, updates) => ({
    type: 'EDIT_PLAYER',
    id,
    updates,
});

export const startEditPlayer = (id, updates) => dispatch => database.ref(`players/${id}`).update(updates).then(() => {
    dispatch(editPlayer(id, updates));
});

export const setPlayers = players => ({
    type: 'SET_PLAYERS',
    players,
});

export const startSetPlayers = () => dispatch => database.ref('players').once('value').then((snapshot) => {
    const players = [];

    snapshot.forEach((childSnapshot) => {
        players.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
        });
    });

    dispatch(setPlayers(players));
});
