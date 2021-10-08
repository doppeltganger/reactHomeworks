import React from 'react';
import './_CardButton.scss';

function CardButton({ children, ...props }) {
	return (
		<div>
			<button {...props}>{children}</button>
		</div>
	);
}

export default CardButton;