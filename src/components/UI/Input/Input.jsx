import React, {forwardRef} from 'react';
import TextField from "@mui/material/TextField";
import './Input.scss';

const Input = forwardRef((props, ref) => {
	return (
		<TextField
			id='input'
			ref={ ref }
			{ ...props }
		/>
	);
});

export default Input;