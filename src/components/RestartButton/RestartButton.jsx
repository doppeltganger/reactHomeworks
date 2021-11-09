import { restartGame } from '../../actions';
import { useGameStore } from '../../context/gameContext';
import './RestartButton.scss';

const RestartButton = () => {
	const [state, dispatch] = useGameStore();

	return (
		<button
			className='restart-button'
			onClick={ () => dispatch(restartGame()) }
		>
			Restart game
		</button>
	);
}

export default RestartButton;