import React from 'react';
import './_CardSelect.scss';

function CardSelect({ value, defaultValue, options, onChange }) {
  return (
	<select value={value} onChange={(event) => onChange(event.target.value)}>
	  <option disabled value="">{defaultValue}</option>
	  {
        options.map((value) => (
		  <option key={value} value={value}>{value}</option>
	    ))
      }
	</select>
  );
}

export default CardSelect;