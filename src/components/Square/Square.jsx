import './Square.scss';
import { useGameStore } from '../../context/gameContext';

const Square = (props) => {
	const { value, handleClick } = props;

	const [{ isGameFinish }] = useGameStore();
	
	return (
		<button
			className='turn-button'
			onClick={ handleClick }
			disabled={ isGameFinish || value}
		>
			{ value }
		</button>
	);
}

export default Square;