import { connect } from 'react-redux';
import Participants from '../components/Participants/Participants';
import { addParticipant, deleteParticipant, searcParticipant, showWinner, clearData } from '../redux/actions/participantActions';
import { addContestData } from '../redux/actions/contestsActions'

const mapStateToProps = (state, props) => {
    let currentContest = state.contests.find(
        (contest) => contest.id === props.route.match.params.competitionId
    );

    return {
        participants: currentContest.participants,
        searchedParticipant: state.contestData.searchedParticipant,
    };
};

const mapDispatchToProps = (dispatch) => ({
    add: (participant) => {
        dispatch(addParticipant(participant));
    },
    delete: (id) => {
        dispatch(deleteParticipant(id));
    },
    search: (value) => {
        dispatch(searcParticipant(value));
    },
    addData: (data) => {
        dispatch(addContestData(data));
    },
    clearData: () => {
        dispatch(clearData());
    },
    addWinner: () => {
        dispatch(showWinner());
    },
});

const ParticipantsContainer = connect(mapStateToProps, mapDispatchToProps)(Participants);
export default ParticipantsContainer;