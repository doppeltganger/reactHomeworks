import { combineReducers } from 'redux';
import { participantReducer } from './participantReducer';
import { formReducer } from './formReducer';

export const rootReducer = combineReducers({
    participantsInfo: participantReducer,
    newParticipant: formReducer,
});