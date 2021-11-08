import * as yup from 'yup'

export const schemaStep1 = yup.object().shape({
    firstName: yup
        .string()
        .required('You need to supply first name')
        .matches(
            /^[a-z\u0400-\u04FF]{1,10}$/i,
            'First name should be all alphabetic characters.'
        ),
    lastName: yup
        .string()
        .required('You need to supply last name')
        .matches(
            /^[a-z\u0400-\u04FF]{1,10}$/i,
            'Last name should be all alphabetic characters.'
        ),
    email: yup
        .string()
        .required('You need to supply the email')
        .email('Enter correct email address'),
});

export const schemeStep2 = yup.object().shape({
    town: yup
        .string()
        .required('You need to supply the town')
        .min('2', 'Invalid number of characters')
        .matches(
            /^[a-z\u0400-\u04FF]+[-/\s]?[a-z\u0400-\u04FF]+$/i,
            'Enter correct  the name of the town.'
        ),
    street: yup
        .string()
        .required('You need to supply the street')
        .min('2', 'Invalid number of characters')
        .matches(
            /^[a-z\u0400-\u04FF]+[-/\s]?[a-z\u0400-\u04FF]+$/i,
            'Enter correct  the name of the street.'
        ),
    house: yup
        .string()
        .required('You need to supply the house')
        .matches(
            /^\d{1,5}[a-z\u0400-\u04FF]?$/i, 
            'Enter correct  the number of the house'
        ),
});

export const schemeStep4 = yup.object().shape({
    password: yup
        .string()
        .required('You need to supply the password'),
    confirmedPassword: yup
        .string()
        .required('You need to confirm the password')
        .oneOf([yup.ref('password'), null], 'Confirm password does not match'),
});