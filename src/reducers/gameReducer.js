import { gameParams } from '../constants';
import { gameActions } from '../actions/gameActions';
import { v4 as id } from 'uuid';

export const initialState = {
	players: { player1: 'player1', player2: 'player2' },
	isGameFinish: false,
	isXTurn: true,
	history: [
		{ squares: new Array(Math.pow(gameParams.size, 2)).fill(null) },
	],
	winnersList: [],
	resultGame: '',
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case gameActions.ADD_HISTORY:
			return {
				...state,
				history: [...state.history, action.payload],
			};

		case gameActions.ADD_HISTORY_FROM_STORAGE:
			return { 
				...state, 
				winnersList: [...action.payload] 
			};

		case gameActions.ADD_WINNER_TO_LIST:
			return {
				...state,
				winnersList: [
					...state.winnersList,
					{
						winner: action.payload.sign,
						date: new Date().toLocaleString(),
						id: id(),
					},
				],
			};

		case gameActions.CHANGE_STATUS_GAME:
			return { 
				...state, 
				isGameFinish: !state.isGameFinish 
			};
	
		case gameActions.CHANGE_STEP:
			return {
				...state,
				history: [...action.payload.currentStep],
				isGameFinish: false
			};

		case gameActions.RESTART_GAME:
			return {
				...initialState,
				winnersList: [...state.winnersList],
			};

		case gameActions.SAVE_NAME:
			return { 
				...state, 
				players: action.payload 
			};

		case gameActions.SELECT_SIGN:
			return {
				...state,
				isXTurn: action.payload === 'X',
			};

		case gameActions.SHOW_RESULT:
			return { 
				...state, 
				resultGame: action.payload 
			};

		default:
			return state;
	}
};