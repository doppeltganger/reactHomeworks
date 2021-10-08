import React, {useState} from 'react';
import CardButton from './UI/button/CardButton';
import CardInput from './UI/input/CardInput';
import {v4 as uuidv4} from "uuid";
import '../styles/_App.scss';

function AddCard({addNewCard}) {
	const [newCard, setNewCard] = useState({
		name: '',
		age: '',
		gender: '',
		balance: '',
	});

	const handleChange = (event) => {
		setNewCard({
			...newCard,
			[event.target.name]: event.target.value,
		});
	};

	const createNewObject = (event) => {
		event.preventDefault();

		if (!(newCard.name && newCard.age && newCard.gender && newCard.balance)) {
			console.log('You have added all users');
			return;
		};

		addNewCard({
			...newCard,
			_id: uuidv4(),
			picture: 'https://st4.depositphotos.com/4326917/24326/v/450/depositphotos_243263326-stock-illustration-user-avatar-illustration-anonymous-sign.jpg',
		});

		setNewCard({
			name: '',
			age: '',
			gender: '',
			balance: '',
		});
	};

	return (
		<div className="cards__form">
			<h2 className="cards__title">Create new card</h2>
			<form action="">
				<CardInput
					type="text"
					name="name"
					placeholder="Enter new name"
					value={newCard.name}
					onChange={handleChange}
				/>

				<CardInput
					type="text"
					name="age"
					placeholder="Enter new age"
					value={newCard.age}
					onChange={handleChange}
				/>
				
				<CardInput
				id="male"
				type="radio"
				name="gender"
				value="male"
				onChange={handleChange}
				checked={newCard.gender === 'male'}
				/>
				<label htmlFor="male">Male</label>

				<CardInput
				id="female"
				type="radio"
				name="gender"
				value="female"
				onChange={handleChange}
				checked={newCard.gender === 'female'}
				/>
				<label htmlFor="female">Female</label>

				<CardInput
					type="text"
					name="balance"
					placeholder="Enter new balance"
					value={newCard.balance}
					onChange={handleChange}
				/>
		
				<CardButton type="submit" onClick={createNewObject}>Add card</CardButton>
			</form>
		</div>
	);
}

export default AddCard;