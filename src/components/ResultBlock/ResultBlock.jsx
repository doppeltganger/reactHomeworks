import { useGameStore } from '../../context/gameContext';
import './ResultBlock.scss';

function ResultBlock() {
	const [state] = useGameStore();

	return (
		<div className='result-block'>
			<h2>List of winners</h2>
			<ul className='result-block__list'>
				{ state.winnersList.map((item, number) => (
					<li className='result-block__list' key={ number }>
						{ `${number + 1 }. ${ item.winner } ${ item.date }`}
					</li>
				)) }
			</ul>
		</div>
	);
}

export default ResultBlock;