const playersReducerDefaultState = [];

export default (state = playersReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_PLAYER':
        return [
            ...state,
            action.player,
        ];
    case 'REMOVE_PLAYER':
        return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PLAYER':
        return state.map((player) => {
            if (player.id === action.id) {
                return {
                    ...player,
                    ...action.updates,
                };
            }
            return player;
        });
    case 'SET_PLAYERS':
        return action.players;
    default:
        return state;
    }
};
