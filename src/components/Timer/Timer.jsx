import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addParticipant } from '../../redux/actions/participantActions';
import { addParticipantData, resetFormFields } from '../../redux/actions/formActions';
import Button from '../UI/Button/Button';
import useTimer from '../../hooks/useTimer';
import formateTime from '../../helpers/formateTime';
import './Timer.scss';

const Timer = (props) => {
	const participant = useSelector((state) => state.newParticipant);

	const dispatch = useDispatch();

	const { startTime, stopTime, resetTime, time, isStoppedTimer } = useTimer();

	let classes = ['timer'];

	if (props.active) {
		classes.push('active');
	}

	useEffect(() => {
		dispatch(addParticipantData({ time: time.counter }));
	}, [time]);

	return (
		<div className={ classes.join(' ') }>
			<div className='timer__body'>
				<h3 className='timer__title'>Participant card</h3>
				<p className='timer__desc'>
					Id: { participant.id }
				</p>
				<p className='timer__desc'>
					Participant: { `${participant.name } ${ participant.surname }`}
				</p>
				<p className='timer__board'>
					{ formateTime(participant.time) }
				</p>
				<div className='timer__control'>
					<Button
						style={ { background: '#0d5825' } }
						onClick={ () => { startTime() } }
						disabled={ !!time.counter && !isStoppedTimer }
					>
						Start
					</Button>
					<Button
						style={ { background: '#800000' } }
						onClick={ () => { stopTime() } }
						disabled={ !time.counter && isStoppedTimer }
					>
						Stop
					</Button>
					<Button
						style={ { background: '#1e3d59' } }
						onClick={ () => { resetTime() } }
						disabled={ !isStoppedTimer }
					>
						Reset
					</Button>
				</div>
				<div className='timer__change-block'>	
					<Button
						onClick={ () => {
							props.setActive(false);
							resetTime();
							dispatch(resetFormFields());
						} }
					>
						Cancel
					</Button>
					<Button
						onClick={ () => {
							props.setActive(false);
							dispatch(addParticipant([participant]));
							dispatch(resetFormFields());
							resetTime();
						} }
						disabled={ !isStoppedTimer }
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Timer;