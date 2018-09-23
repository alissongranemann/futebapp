const gamesReducerDefaultState = [];

export default (state = gamesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return [
                ...state,
                action.game
            ];
        case 'REMOVE_GAME':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_GAMES':
            return action.games;
        default:
            return state;
    }
};
