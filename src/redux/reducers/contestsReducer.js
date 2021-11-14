import { contestsActions } from '../actions/contestsActions';

const initialState = [];

export const contestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case contestsActions.CREATE_CONTEST:
            return [
                ...state,
                {
                    ...action.payload,
                    status: 'active',
                    participants: [],
                    winner: {},
                },
        ];
        
        case contestsActions.ADD_CONTEST_DATA:
            const changeContestData = state.map((contest, item) => {
                if (+contest.id === +action.payload.id) {
                    return {
                        ...state[item],
                        participants: action.payload.participants,
                        winner: action.payload.winner,
                        status: Object.entries(action.payload.winner).length
                            ? 'finished'
                            : 'active',
                    };
                }
                return contest;
            });
            return [...changeContestData];

        default:
        return state;
    }
};