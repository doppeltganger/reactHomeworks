import {CHANGE_STEP, CHANGE_THEME, UPDATE_INPUT, SELECT_AVATAR} from './actions';

export const initialState = {
    step: 1,

    userData: {
        firstName: '',
        lastName: '',
        email: '',
        town: '',
        street: '',
        house: '',
        image: {
            imagePreview: '',
        },
        password: '',
        confirmedPassword: ''
    },

    isDarkTheme: false,
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STEP:
            return {
                ...state,
                step: action.payload.inputValue
            };
        case UPDATE_INPUT:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.payload.inputName]: action.payload.inputValue
                }
            };
        case CHANGE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            };
        case SELECT_AVATAR:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    image: { ...state.userData.image, imagePreview: action.payload.inputSrc },
                },
            };
        default:
            return state
    }
}

export default formReducer;