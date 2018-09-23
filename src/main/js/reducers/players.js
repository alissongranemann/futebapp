const playersReducerDefaultState = [];

export default (state = playersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                ...state,
                action.player
            ];
        case 'SET_PLAYERS':
            return action.players;
        default:
            return state;
    }
};
