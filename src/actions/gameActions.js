export const gameActions = {
	ADD_HISTORY: 'add history',
	ADD_HISTORY_FROM_STORAGE: 'get history from Local storage',
	ADD_WINNER_TO_LIST: 'add winner to list',
	CHANGE_STEP: 'change step',
	CHANGE_STATUS_GAME: 'change status game',
	RESTART_GAME: 'restart game',
	SAVE_NAME: 'save player name',
	SELECT_SIGN: 'select sign',
	SHOW_RESULT: 'show winner of game',
};

export const addToHistory = (squares) => ({
	type: gameActions.ADD_HISTORY,
	payload: { squares },
});

export const addWinnerToList = (sign) => ({
	type: gameActions.ADD_WINNER_TO_LIST,
	payload: { sign },
});

export const changeStep = (currentStep) => ({
	type: gameActions.CHANGE_STEP,
	payload: { currentStep },
});

export const changeStatusGame = () => ({
	type: gameActions.CHANGE_STATUS_GAME,
});

export const putFromLocalStorage = (history) => ({
	type: gameActions.ADD_HISTORY_FROM_STORAGE,
	payload: history,
});

export const restartGame = () => ({
	type: gameActions.RESTART_GAME,
});

export const savePlayerName = (names) => ({
	type: gameActions.SAVE_NAME,
	payload: names,
});

export const selectSign = (sign) => ({
	type: gameActions.SELECT_SIGN,
	payload: sign,
});

export const showResult = (inputValue) => ({
	type: gameActions.SHOW_RESULT,
	payload: inputValue,
});
