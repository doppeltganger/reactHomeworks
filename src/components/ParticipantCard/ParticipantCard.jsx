import Button from '../UI/Button/Button';
import formateTime from '../../helpers/formateTime';
import './ParticipantCard.scss'

const ParticipantCard = ({ participant, onClick }) => {
	return (
		<div className='cards__wrap'>
			<div className='card'>
				<p className='card__desc'>
					Id: { participant.id }
				</p>
				<p className='card__desc'>
					Name: { participant.name }
				</p>
				<p className='card__desc'>
					Surname: { participant.surname }
				</p>
				<p className='card__desc'>
					time: { formateTime(participant.time) }
				</p>
				<Button onClick={ () => { onClick(participant.id) } }>Delete</Button>
			</div>
		</div>
	);
}

export default ParticipantCard;