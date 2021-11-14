import { combineReducers } from 'redux';
import { formReducer } from './formReducer';
import { participantReducer } from './participantReducer';
import { contestsReducer } from './contestsReducer';

export const rootReducer = combineReducers({
    contests: contestsReducer,
    contestData: participantReducer,
    newParticipant: formReducer,
});