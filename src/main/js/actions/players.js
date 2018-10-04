import database from 'service/firebase'

export const addPlayer = (player) => ({
    type: 'ADD_PLAYER',
    player
});

export const startAddPlayer = (groupId = '', playerData = {}) => {
    return (dispatch) => {
        const {
            name = ''
        } = playerData;
        const player = { name };
        return database.ref("players").push(player).then((ref) => {
            database.ref(`groups/${groupId}/players/${ref.key}`).set(true);
            dispatch(addPlayer({
                id: ref.key,
                ...player
            }));
        });
    };
};

export const removePlayer = ({ id } = {}) => ({
    type: 'REMOVE_PLAYER',
    id
});

export const startRemovePlayer = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`players/${id}`).remove().then(() => {
            dispatch(removePlayer({ id }));
        });
    };
};

export const setPlayers = (players) => ({
    type: 'SET_PLAYERS',
    players
});

export const startSetPlayers = () => {
    return (dispatch) => {
        return database.ref('players').once('value').then((snapshot) => {
            const players = [];

            snapshot.forEach((childSnapshot) => {
                players.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPlayers(players));
        });
    };
};
