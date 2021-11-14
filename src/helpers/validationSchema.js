import * as yup from 'yup';
export const participantSchema = yup.object().shape({
	name: yup
		.string()
		.required('You need to supply name')
		.matches(
			/^[a-z\u0400-\u04FF]{1,10}$/i, 
			'Name should be all alphabetic characters'
		),

	surname: yup
		.string()
		.required('You need to supply first surname')
		.matches(
			/^[a-z\u0400-\u04FF]{1,10}$/i,
			'Surname should be all alphabetic characters'
		),
});

export const contestSchema = yup.object().shape({
	contestName: yup
		.string()
		.required('You need to supply name of the game')
});