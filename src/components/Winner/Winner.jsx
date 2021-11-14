import formateTime from '../../helpers/formateTime';
import Button from '../UI/Button/Button';
import './Winner.scss'

const Winner = (props) => {
	return (
		<div>
			{ Object.keys(props.winner).length ? (
				<div className='winners'>
					<h3 className='winners__title'>The winner</h3>
					<p className='winners__desc'>
						Id: { props.winner.id }
					</p>
					<p className='winners__desc'>
						Participant: {`${ props.winner.name} ${props.winner.surname}` }
					</p>
					<p className='winners__desc'>
						Time: { formateTime(props.winner.time) }
					</p>
				</div>
			) : (
			<div className='winners'>
				<h3 className='winners__title'>Total participants: {props.participants.length}</h3>
				<Button onClick={ () => { props.determineWinner(props.participants.length) } }>Show winner</Button>
			</div>
		) }
		</div>
	);
}

export default Winner;