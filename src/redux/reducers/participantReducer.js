import { participantActions } from '../actions/participantActions';

const initialState = {
    participants: [],
    winner: {},
    searchedParticipant: '',
};

export const participantReducer = (state = initialState, action) => {
    switch (action.type) {
        case participantActions.ADD_PARTICIPANT:
            return {
                ...state,
                participants: [...state.participants, ...action.payload],
            };

        case participantActions.DELETE_PARTICIPANT:
            return {
                ...state,
                participants: state.participants.filter(({ id }) => id !== action.payload),
            };
        
        case participantActions.SEARCH_PARTICIPANT:
            return {
                ...state,
                searchedParticipant: action.payload,
            };

        case participantActions.SHOW_WINNER:
            return {
                ...state,
                winner: [...state.participants].sort((a, b) => b.time - a.time).pop(),
            };
            
        default:
        return state;
    }
};