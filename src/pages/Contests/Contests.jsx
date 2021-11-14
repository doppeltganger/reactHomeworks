import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ContestCard from '../../components/ContestCard/ContestCard';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './Contests.scss';

const Contests = () => {
    const [inputState, setInputState] = useState('');

    const history = useHistory();

    const contests = useSelector((state) => state.contests);

    const showContest = (id) => {
        history.push(`/competition/${id}`);
    };

    const filteredContests = useMemo(() => {
        if (contests.length) {
            return contests.filter(({ name, id }) => {
                return (
                    name.toLowerCase().includes(inputState.toLowerCase()) ||
                    id.includes(inputState)
                );
            });
        }
        return contests;
    }, [contests, inputState]);

    return (
        <div className='contests'>
            <div className='contests__header'>
                <Input
                    style={ { flex: '0 0 76.5%' } }
                    placeholder='Enter contest name or id'
                    value={ inputState }
                    onChange={ (event) => {
                        setInputState(event.target.value);
                    } }
                />
                <Button
                    style={ { margin: '0 0 0 20px', padding: '19.5px 70px' } }
                    onClick={ () => {
                    history.push('/create');
                    } }
                >
                    Create new contest
                </Button>
            </div>
            <div className='contests__body'>
                { filteredContests.map((contest) => (
                    <ContestCard contest={ contest } onClick={ showContest } />
                )) }
            </div>
        </div>
    );
}

export default Contests;