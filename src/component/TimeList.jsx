import React from 'react';
import {v4 as uuidv4} from 'uuid';

function TimerResultsList({times}) {
	return (
		<ul className="timer__list">
			{times.map((time) => (
				<li key={uuidv4()}>{time.hours}:{time.minutes}:{time.seconds}:{time.milliseconds}</li>
			))}
		</ul>
	);
}

export default TimerResultsList;