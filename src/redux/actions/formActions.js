export const formActions = {
	ADD_PARTICIPANT_DATA: 'add the data of new participant',
	RESET_FORM_FIELDS: 'reset form input fields',
};

export const addParticipantData = (inputValue) => ({
	type: formActions.ADD_PARTICIPANT_DATA,
	payload: inputValue,
});

export const resetFormFields = () => ({
    type: formActions.RESET_FORM_FIELDS,
});