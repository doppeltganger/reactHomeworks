import React, { useState } from 'react';
import { useGameStore } from '../../context/gameContext';
import { savePlayerName, selectSign } from '../../actions';
import './SettingsBlock.scss';

function SettingsBlock() {
	const [playerName, setPlayerName] = useState({
		player1: '',
		player2: '',
	});
	
    const [state, dispatch] = useGameStore();

	const handleEnterPlayerName = (event) => {
		setPlayerName({
			...playerName,
			[event.target.name]: event.target.value,
		});
	};

	const handleSavePlayerName = (event) => {
		event.preventDefault();

		if (!(playerName.player1 && playerName.player2)) {
			return;
		}

		dispatch(savePlayerName(playerName));
	};

    const handleSelectSign = (event) => {
		dispatch(selectSign(event.target.value));
	};

	return (
        <div>
            <div className='name-block'>
                <form>
                    <label>Player 1 name (X)</label>
                    <input
                        className='name-block__input'
                        type='text'
                        name='player1'
                        value={ playerName.player1 }
                        onChange={ handleEnterPlayerName }
                        placeholder='Name for player X'
                        disabled={ state.history.length >= 2 }
                    />
                    <label>Player 2 name (0)</label>
                    <input
                        className='name-block__input'
                        type='text'
                        name='player2'
                        value={ playerName.player2 }
                        onChange={ handleEnterPlayerName }
                        placeholder='Name for player 0'
                        disabled={ state.history.length >= 2 }
                    />
                    <button
                        onClick={ (event) => handleSavePlayerName(event) }
                        disabled={ state.history.length >= 2 }
                        className='name-block__button'
                    >
                        Save names
                    </button>
                </form>
            </div>
            <div className='sign-block'>
                <p>Select sign for first turn</p>
                <form className='sign-block__form'>
                    <input
                        className='sign-block__input'
                        type='radio'
                        value='X'
                        onChange={ handleSelectSign }
                        disabled={ state.history.length >= 2 }
                        checked={ state.isXTurn }
                    />
                    <label className='sign-block__desc'> X</label>
                    <input
                        className='sign-block__input'
                        type='radio'
                        value='O'
                        onChange={ handleSelectSign }
                        disabled={ state.history.length >= 2 }
                        checked={ !state.isXTurn }
                    />
                    <label className='sign-block__desc'> O</label>
                </form>
            </div>
        </div>
	);
}

export default SettingsBlock;