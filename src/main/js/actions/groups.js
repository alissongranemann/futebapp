import uuid from 'uuid';

export const addGroup = (
  {
    id = '',
    name = '',
    players = [],
    games = []
  } = {}
) => ({
  type: 'ADD_GROUP',
  group: {
    id: id ? id : uuid(),
    name,
    players, 
    games
  }
});

export const removeGroup = ({ id } = {}) => ({
  type: 'REMOVE_GROUP',
  id
});

export const editGroup = (id, updates) => ({
  type: 'EDIT_GROUP',
  id,
  updates
});

export const addGame = (
  groupId = '', 
  {
    id = '',
    location = '',
    numPlayers = -1,
    date = '',
    schedule = ''
  }
) => ({
  type: 'ADD_GAME',
  id,
  game: {
    id: id ? id : uuid(),
    location,
    numPlayers,
    date,
    schedule
  }
});

export const addPlayer = (
  groupId = '',
  { 
    id = '',
    name = ''
  }
) => ({
  type: 'ADD_PLAYER',
  groupId,
  player: {
    id: id ? id : uuid(),
    name
  }
});
