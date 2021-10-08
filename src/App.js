import {useState, useMemo} from 'react';
import {userData} from './scripts/userData';
import Header from './component/Header';
import AddCard from './component/AddCard';
import CardList from './component/CardList';
import CardModal from './component/CardModal';
import './styles/_App.scss';

function App() {
	const [userList, setUserList] = useState(userData);
	const [filter, setFilter] = useState({name: '', age: ''});
	const [userInfo, setUserInfo] = useState('');
	const [isModal, setIsModal] = useState(false);

	const filterUserListByName = useMemo(() => {
		return userList.filter((user) => user.name.toLowerCase().includes(filter.name.toLowerCase()));
	}, [filter.name, userList]);

	const sortCardsByAge = useMemo(() => {
		if (filter.age === 'Descending') {
			return [...filterUserListByName].sort((a, b) => b.age - a.age);
		}
		if (filter.age === 'Ascending') {
			return [...filterUserListByName].sort((a, b) => a.age - b.age);
		}
		return filterUserListByName;
	}, [filter.age, filterUserListByName]);

	const modalWindow = (user) => {
		setUserInfo(user);
		setIsModal(true);
	};  

	const addNewCard = (card) => {
		setUserList([...userList, card]);
	};

	return (
	<div className="app">
		<Header filter={filter} setFilter={setFilter} setUserList={setUserList} />

		<div className="app__container">
			<AddCard addNewCard={addNewCard} />
			<CardList userList={sortCardsByAge} modalWindow={modalWindow} />
			<CardModal userName={userInfo} modalState={isModal} setModalState={setIsModal} />
		</div>
	</div>
	);
}

export default App;