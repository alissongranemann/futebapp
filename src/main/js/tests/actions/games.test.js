import { addMatch, editMatch, removeMatch } from 'actions/matches';

test('should setup remove match action object', () => {
    const action = removeMatch({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_MATCH',
        id: '123abc',
    });
});

test('should setup edit match action object', () => {
    const action = editMatch('123abc', { location: 'new location' });
    expect(action).toEqual({
        type: 'EDIT_MATCH',
        id: '123abc',
        updates: {
            location: 'new location',
        },
    });
});

test('should setup add match action object with provided values', () => {
    const matchData = {
        location: 'elase',
        date: '15151518',
        schedule: '515618477',
    };
    const action = addMatch(matchData);
    expect(action).toEqual({
        type: 'ADD_MATCH',
        match: {
            ...matchData,
        },
    });
});
