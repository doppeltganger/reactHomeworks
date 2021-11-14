export const contestsActions = {
    CREATE_CONTEST: 'create new contest',
    ADD_CONTEST_DATA: 'add the data of new contest'
};

export const createContest = (contest) => ({
    type: contestsActions.CREATE_CONTEST,
    payload: contest,
});

export const addContestData = (inputValue) => ({
    type: contestsActions.ADD_CONTEST_DATA,
    payload: inputValue,
});