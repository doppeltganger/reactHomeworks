import React, { useState } from 'react';
import { createId } from '../../helpers/createId';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { participantSchema } from '../../helpers/validationSchema';
import { v4 as id } from 'uuid';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Timer from '../Timer/Timer';
import './Registration.scss'

const Registration = (props) => {
	const [isActiveTimer, setIsActiveTimer] = useState(false);

	const { register, handleSubmit, formState: { errors, isValid } } = useForm({
		mode: 'onChange',
		resolver: yupResolver(participantSchema),
	});

	const onInputData = (event) => {
		props.inputValue(event.target);
	};
	
	const onSubmit = () => {
		const ID = createId();
		props.inputValue({ name: 'id', value: ID });
		setIsActiveTimer((prop) => !prop);
	};

	return (
		<div className='registration'>
			<h3 className='registration__title'>Registration Participant</h3>
			<form onSubmit={ handleSubmit(onSubmit) }>
				<Input
					style={ { margin: '0 0 30px' } }
					{ ...register('name', { onChange: onInputData  }) }
					placeholder='Enter name...'
					error={ !!errors.name }
					helperText={ errors?.name?.message }
					value={ props.participant.name }
				/>
				<Input
					style={ { margin: '0 0 70px' } }
					{ ...register('surname', { onChange: onInputData }) }
					placeholder='Enter surname...'
					error={ !!errors.surname }
					helperText={ errors?.surname?.message }
					value={ props.participant.surname }
				/>
				<Button
					type='submit'
					disabled={!isValid}
				>
					Register participant
				</Button>
			</form>
			<Timer active={ isActiveTimer } setActive={ setIsActiveTimer }/>
		</div>
	);
}

export default Registration;