import { addWinnerToList, changeStatusGame, showResult } from '../../actions';
import { useGameStore } from '../../context/gameContext';
import { getSignTurn } from '../../helpers/getSignTurn';
import { selectPlayersSign } from '../../helpers/selectPlayersSign';
import './GiveUpButton.scss';

function GiveUpButton() {
	const [state, dispatch] = useGameStore();

	const determinedWinner = selectPlayersSign(
		getSignTurn(state.history.length, state.isXTurn),
		state.players.player1,
		state.players.player2,
	);

	const giveUpPlayer = () => {
		dispatch(changeStatusGame());
		dispatch(addWinnerToList(determinedWinner));
		dispatch(showResult(determinedWinner));
	};

	return (
		<>
			<button
				className='give-button'
				onClick={ () => giveUpPlayer() }
				disabled={ state.isGameFinish }
			>
				Give up!
			</button>
		</>
	);
}

export default GiveUpButton;