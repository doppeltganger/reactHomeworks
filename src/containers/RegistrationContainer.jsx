import { connect } from 'react-redux';
import { addParticipantData } from '../redux/actions/formActions';
import Registration from '../components/Registration/Registration';

const mapStateToProps = (state) => ({
	participant: state.newParticipant,
});

const mapDispatchToProps = (dispatch) => ({
	inputValue: (participant) => {
		dispatch(addParticipantData({ [participant.name]: participant.value }));
	},
});

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;