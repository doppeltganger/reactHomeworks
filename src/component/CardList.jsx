import React from 'react';
import CardItem from './CardItem';
import '../styles/_App.scss';

function CardList({userList, modalWindow}) {
	if(!userList.length) {
		return <h2 className="cards__warn-title">Not found any tasks</h2>
	}

	return (
		<div className="cards">
			{userList.map((user) => (
				<CardItem key={user._id} user={user} modalWindow={modalWindow} />
			))}
		</div>
	);
}

export default CardList;