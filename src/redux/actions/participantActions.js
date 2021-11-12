export const participantActions = {
    ADD_PARTICIPANT: 'add new participant',
    DELETE_PARTICIPANT: 'delete the participant',
    SEARCH_PARTICIPANT: 'search the participant',
    SHOW_WINNER: 'show the winner',
};

export const addParticipant = (participant) => ({
    type: participantActions.ADD_PARTICIPANT,
    payload: participant,
});

export const deleteParticipant = (id) => ({
    type: participantActions.DELETE_PARTICIPANT,
    payload: id,
});

export const searcParticipant = (text) => ({
    type: participantActions.SEARCH_PARTICIPANT,
    payload: text,
});

export const showWinner = () => ({
    type: participantActions.SHOW_WINNER,
});