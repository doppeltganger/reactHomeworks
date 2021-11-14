import { connect } from 'react-redux';
import { showWinner } from '../redux/actions/participantActions';
import Winner from '../components/Winner/Winner';

const mapStateToProps = (state, props) => {
    let currentContest = state.contests.find(
        (contest) => contest.id === props.route.match.params.competitionId
    );

    return {
        participants: currentContest.participants,
        winner: currentContest.winner,
    };
};

const mapDispatchToProps = (dispatch) => ({
    determineWinner: (inputValue) => {
        if (inputValue) dispatch(showWinner());
    },
});

const WinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Winner);
export default WinnerContainer;
