import React, { useMemo, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ParticipantCard from '../ParticipantCard/ParticipantCard';
import './Participants.scss';

const Participants = (props) => {
    const history = useHistory();

    const contestParticipants = useSelector((state) => state.contestData);

    const deleteParticipant = (id) => {
        props.delete(id);
    };

    const searchParticipant = (value) => {
        props.search(value);
    };

    useEffect(() => {
        props.addData({
            participants: contestParticipants.participants,
            id: props.route.match.params.competitionId,
            winner: contestParticipants.winner,
        });
    }, [contestParticipants]);

    useEffect(() => {
        props.add(props.participants);

        if (props.participants.length) {
            props.addWinner();
        }

        return () => {
            props.clearData();
        };
    }, []);

    const filteredParticipant = useMemo(() => {
        if (props.participants.length) {
            return props.participants.filter(({ name, surname, id }) => {
                return (
                    name.toLowerCase().includes(props.searchedParticipant.toLowerCase()) ||
                    surname.toLowerCase().includes(props.searchedParticipant.toLowerCase()) ||
                    id.includes(props.searchedParticipant)
                );
            });
        }
        return props.participants;
    }, [props.participants, props.searchedParticipant]);

    return (
        <div className='cards'>
            <div className='cards__header'>
                <Input
                    style={ { flex: '0 0 calc(100% / 3 * 2)' } }
                    placeholder='Enter paricipant name, surname or id'
                    value={ props.searchedParticipant }
                    onChange={ (event) => { searchParticipant(event.target.value) } }
                />
                <Button 
                    style={ { padding: '20px 55px' } }
                    onClick={ () => history.push('/') }
                >
                    Go to contests page
                </Button>
            </div>
            <div className='cards__body'>
                { filteredParticipant.map((participant) => {
                    return (
                        <ParticipantCard participant={ participant } onClick={ deleteParticipant } key={ participant.id } />
                    );
                }) }
            </div>
        </div>
    );
}

export default Participants;