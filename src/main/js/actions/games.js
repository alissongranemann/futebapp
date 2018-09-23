import database from 'firebase/firebase'

export const addGame = (game) => ({
    type: 'ADD_GAME',
    game
});

export const startAddGame = (gameData = {}) => {
    return (dispatch) => {
        const {
            location = '',
            date = '',
            schedule = ''
        } = gameData;
        const game = { location, date, schedule };
        return database.ref("games").push(game).then((ref) => {
            dispatch(addGame({
                id: ref.key,
                ...game
            }));
        });
    };
};

export const setGames = (games) => ({
    type: 'SET_GAMES',
    games
});

export const startSetGames = () => {
    return (dispatch) => {
        return database.ref('games').once('value').then((snapshot) => {
            const games = [];

            snapshot.forEach((childSnapshot) => {
                games.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setGames(games));
        });
    };
};


