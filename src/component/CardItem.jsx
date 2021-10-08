import React from 'react';
import CardButton from './UI/button/CardButton';
import '../styles/_App.scss';

function CardItem({modalWindow, user}) {
const {name, age, gender, balance, picture} = user;
	return (
		<div className="cards__item">
			<div className="card">
				<div className="card__visual">
					<img src={picture} alt="user" />
				</div>
				
				<div className="card__body">
					<p><span>name:</span> {name}</p>
					<p><span>age:</span> {age}</p>
					<p><span>gender:</span> {gender}</p>
					<p><span>balance:</span> {balance}</p>
					<CardButton className="card__inform-button" onClick={() => modalWindow(user)}>Detailed information</CardButton>
				</div>
			</div>
		</div>
	);
}

export default CardItem;