import React, { useEffect } from 'react';
import { useGameStore } from '../../context/gameContext';
import { addToHistory, addWinnerToList, putFromLocalStorage, showResult } from '../../actions';
import { changeStatusGame } from '../../actions';
import { getSignTurn } from '../../helpers/getSignTurn';
import { determineWinner } from '../../helpers/determineWinner';
import Board from '../Board/Board';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import SettingsBlock from '../SettingsBlock/SettingsBlock';
import GiveUpButton from '../GiveUpButton/GiveUpButton';
import RestartButton from '../RestartButton/RestartButton';
import ResultBlock from '../ResultBlock/ResultBlock';
import './Game.scss';

const Game = () => {
	const [{ history, isGameFinish, isXTurn, players, winnersList }, dispatch] = useGameStore();

	const currentStep = history[history.length - 1];

	const classes = ['game__over-title'];

	useEffect(() => {
		const historyWinnersResult = JSON.parse(localStorage.getItem('winners'));
		historyWinnersResult && dispatch(putFromLocalStorage(historyWinnersResult));
	}, []);

	useEffect(() => {
		localStorage.setItem('winners', JSON.stringify(winnersList));
	}, [winnersList]);

	const handleClick = (index) => {
		const squares = [...currentStep.squares];
		squares[index] = getSignTurn(history.length, isXTurn);

		const determinedWinner = determineWinner(squares, players);

		if (determinedWinner) {
			dispatch(changeStatusGame());
			dispatch(showResult(determinedWinner));
			determinedWinner !== 'Draw' && dispatch(addWinnerToList(determinedWinner));
		}

		dispatch(addToHistory(squares));
	};

	(isGameFinish) ? classes.push('game__over-title-vs') : classes.slice(0, 1)
	

	return (
		<div className='game__wrap'>
			<h2 className='game__title'>{ players.player1 } versus { players.player2 }</h2>
			<div className='game__body'>
				<div className='game'> 
					<div className='game__settings'>
						<SettingsBlock/>
						{ history.length >= 2 ? <GiveUpButton/> : null }
					</div>
					<div className='game__field'>
						<h3 className={classes.join(' ')}>Game over!</h3>
						<Board
							handleClick={ handleClick }
							squares={ currentStep.squares }
						/>
					</div>
					<div className='game__description'>
						<DescriptionBlock/>
					</div>
				</div>
				<RestartButton/>
			</div>
			<ResultBlock/>
		</div>
	);
}

export default Game;