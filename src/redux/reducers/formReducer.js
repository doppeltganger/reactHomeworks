import { formActions } from '../actions/formActions';

const initialState = {
	name: '',
	surname: '',
	time: '',
};

export const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case formActions.ADD_PARTICIPANT_DATA:
			return {
				...state,
				...action.payload,
			};
			
		case formActions.RESET_FORM_FIELDS:
			return {
				...initialState,
			};

		default:
		return state;
	}
};