import { addGame, editGame, removeGame } from 'actions/games';

test('should setup remove game action object', () => {
    const action = removeGame({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_GAME',
        id: '123abc'
    });
}); 

test('should setup edit game action object', () => {
    const action = editGame('123abc', { location: 'new location' });
    expect(action).toEqual({
        type: 'EDIT_GAME',
        id: '123abc',
        updates: {
            location: 'new location'
        }
    });
}); 

test('should setup add game action object with provided values', () => {
    const gameData = {
        location: 'elase',
        date: '15151518',
        schedule: '515618477'
    };
    const action = addGame(gameData);
    expect(action).toEqual({
        type: 'ADD_GAME',
        game: {
            ...gameData
        }
    });
});