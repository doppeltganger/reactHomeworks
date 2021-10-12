import React from 'react';
import './_Button.scss';

function Button({ children, ...props }) {
	return (
		<div>
			<button {...props}>{children}</button>
		</div>
	);
}

export default Button;