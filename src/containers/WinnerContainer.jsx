import { connect } from 'react-redux';
import { showWinner } from '../redux/actions/participantActions';
import Winner from '../components/Winner/Winner';

const mapStateToProps = (state) => ({
    participants: state.participantsInfo.participants,
    winner: state.participantsInfo.winner,
});

const mapDispatchToProps = (dispatch) => ({
    determineWinner: (inputValue) => {
        if (inputValue) dispatch(showWinner());
    },
});

const WinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Winner);
export default WinnerContainer;