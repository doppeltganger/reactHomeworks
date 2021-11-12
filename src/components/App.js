import ParticipantsContainer from '../containers/ParticipantsContainer';
import RegistrationContainer from '../containers/RegistrationContainer';
import WinnerContainer from '../containers/WinnerContainer';
import '../styles/main.scss';

function App() {
    return (
        <div className='contest'>
            <div className='contest__participants'>
                <ParticipantsContainer />
            </div>
            <div className='contest__form'>
                <RegistrationContainer />
                <WinnerContainer />
            </div>
        </div>
    );
    }

export default App;