import database from 'firebase/firebase'

export const addPlayer = (player) => ({
    type: 'ADD_PLAYER',
    player
});

export const startAddPlayer = (playerData = {}) => {
    return (dispatch) => {
        const {
            name = ''
        } = playerData;
        const player = { name };

        database.ref("players").push(player).then((ref) => {
            dispatch(addPlayer({
                id: ref.key,
                ...player
            }));
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
