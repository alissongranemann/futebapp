import database from 'service/firebase';

export const addMatch = match => ({
    type: 'ADD_MATCH',
    match,
});

export const startAddMatch = (groupId = '', matchData = {}) => (dispatch) => {
    const {
        location = '',
        date = '',
        time = '',
        duration = 0,
        vacancy = 0,
    } = matchData;
    const match = {
        location, date, time, duration, vacancy, group: groupId,
    };
    return database.ref('matches').push(match).then((ref) => {
        database.ref(`groups/${groupId}/matches/${ref.key}`).set(true);
        dispatch(addMatch({
            id: ref.key,
            ...match,
        }));
    });
};

export const removeMatch = ({ id } = {}) => ({
    type: 'REMOVE_MATCH',
    id,
});

export const startRemoveMatch = ({ id, groupId } = {}) => dispatch => database.ref(`matches/${id}`).remove().then(() => {
    database.ref(`groups/${groupId}/matches/${id}`).remove();
    dispatch(removeMatch({ id }));
});

export const editMatch = (id, updates) => ({
    type: 'EDIT_MATCH',
    id,
    updates,
});

export const startEditMatch = (id, updates) => dispatch => database.ref(`matches/${id}`).update(updates).then(() => {
    dispatch(editMatch(id, updates));
});
