const groupsReducerDefaultState = [];

export default (state = groupsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        action.group
      ];
    case 'REMOVE_GROUP':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_GROUP':
      return state.map((group) => {
        if (group.id === action.id) {
          return {
            ...group,
            ...action.updates
          };
        } else {
          return group;
        };
      });
    case 'ADD_GAME':
      var group = state.find((group) => group.id === action.groupId);
      group.games = [...group.games, action.game];
      return state;
    case 'ADD_PLAYER':
      var group = state.find((group) => group.id === action.groupId);
      group.players = [...group.players, action.player];
      return state;
    default:
      return state;
  }
};
