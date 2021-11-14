import Button from '../UI/Button/Button';
import './ContestCard.scss';

const ContestCard = ({ contest, onClick }) => {
    return (
        <div className='contest'>
            <div className='contest__body'>
                <p className='contest__desc'>
                    Id: { contest.id }
                </p>
                <p className='contest__desc'>
                    Name: { contest.name }
                </p>
                <p className='contest__desc'>
                    Status: { contest.status }
                </p>
                { Object.entries(contest.winner).length ? (
                    <p className='contest__desc'>
                        { `Winner: ${contest.winner.name} ${contest.winner.surname}` }
                    </p>
                ) : (
                    ''
                ) }
            </div>
            <Button onClick={ () => { onClick(contest.id) } }>Show</Button>
        </div>
    );
}

export default ContestCard;