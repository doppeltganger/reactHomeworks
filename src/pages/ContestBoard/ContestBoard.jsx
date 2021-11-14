import ParticipantsContainer from '../../containers/ParticipantsContainer';
import RegistrationContainer from '../../containers/RegistrationContainer';
import WinnerContainer from '../../containers/WinnerContainer';
import './ContestBoard.scss';

const ContestBoard = (props) => {
    return (
        <>
        <div className='contest-board'>
            <div className='contest-board__participants'>
                <ParticipantsContainer route={ props } />
            </div>
            <div className='contest-board__form'>
                <RegistrationContainer/>
                <WinnerContainer route={ props } />
            </div>
        </div>
        </>
    );
}

export default ContestBoard;