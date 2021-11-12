import { connect } from 'react-redux';
import Participants from '../components/Participants/Participants';
import { addParticipant, deleteParticipant, searcParticipant } from '../redux/actions/participantActions';

const mapStateToProps = (state) => ({
    participants: state.participantsInfo.participants,
    searchedParticipant: state.participantsInfo.searchedParticipant,
});

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
});

const ParticipantsContainer = connect(mapStateToProps, mapDispatchToProps)(Participants);
export default ParticipantsContainer;