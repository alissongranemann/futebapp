const matchesReducerDefaultState = [];

export default (state = matchesReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_MATCH':
        return [
            ...state,
            action.match,
        ];
    case 'REMOVE_MATCH':
        return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MATCH':
        return state.map((match) => {
            if (match.id === action.id) {
                return {
                    ...match,
                    ...action.updates,
                };
            }
            return match;
        });
    case 'SET_MATCHES':
        return action.matches;
    default:
        return state;
    }
};
