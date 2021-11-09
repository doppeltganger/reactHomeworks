import { useGameStore } from '../../context/gameContext';
import { changeStep } from '../../actions';
import { getSignTurn } from '../../helpers/getSignTurn';
import { selectPlayersSign } from '../../helpers/selectPlayersSign';
import './DescriptionBlock.scss';

const DescriptionBlock = () => {
	const [state, dispatch] = useGameStore();

	const handleChangeStep = (number) => {
		dispatch(changeStep(state.history.slice(0, number)));
	};

	return (
        <div>
            <div className='winner-block'>
                <h3>Winner:</h3>
                <p>{ state.resultGame }</p>
            </div>
            <div className='history-block'>
                <div className='history-block__header'>
                    <h3>Next step:</h3>
                    <p>
                        { selectPlayersSign(
                            getSignTurn(state.history.length, state.isXTurn),
                            state.players.player1,
                            state.players.player2,
                        ) }
                    </p>
                </div>
                <div className='history-block__body'>
                    <h3>History</h3>
                    <p>
                        { state.history.map((currentStep, number) => (
                            <button
                                className='history-block__button'
                                key={ number }
                                onClick={ () => handleChangeStep(number) }
                                style={ { display: number === 0 && 'none' } }
                            >
                                Step { number }
                            </button>
                        )) }
                    </p>
                </div>
            </div>
        </div>
	);
}

export default DescriptionBlock; 