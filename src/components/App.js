import Game from './Game/Game';
import { gameReducer, initialState } from '../reducers';
import { GameProvider } from '../context';
import '../styles/main.scss';

function App() {
    return (
        <GameProvider reducer={gameReducer} initialState={initialState}>
            <Game/>
        </GameProvider>
    );
}

export default App;