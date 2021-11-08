import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';
import '../../styles/main.scss';

const FormInput = forwardRef((props, ref) => {
    return (
        <TextField
            className='form__input'
            variant='outlined'
            inputRef={ ref }
            { ...props }
        />
    );
});

export default FormInput;