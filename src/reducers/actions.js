export const CHANGE_STEP = 'change step';
export const UPDATE_INPUT = 'update input';
export const CHANGE_THEME = 'change theme';
export const SELECT_AVATAR = 'select avatar';

export const changeStep = (inputValue) => ({
    type: CHANGE_STEP, 
    payload: { inputValue }
});

export const updateInput = (inputName, inputValue) => ({
    type: UPDATE_INPUT, 
    payload: { inputName, inputValue }
});

export const changeTheme = () => ({
    type: CHANGE_THEME
});

export const selectAvatar = (inputSrc) => ({
    type: SELECT_AVATAR,
    payload: { inputSrc } 
});