import React, { useMemo, useEffect } from 'react';
import { useStorage } from '../../hooks/useStorage';
import Input from '../UI/Input/Input';
import ParticipantCard from '../ParticipantCard/ParticipantCard';
import './Participants.scss';

const Participants = (props) => {
    const [participants] = useStorage([], 'participants');

    const deleteParticipant = (id) => {
        props.delete(id);
    };

    const searchParticipant = (value) => {
        props.search(value);
    };

    useEffect(() => {
        props.add(participants);
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
            <Input
                style={ { width: '100%', margin: '0 0 15px' } }
                placeholder='Enter paricipant name, surname or id'
                value={ props.searchedParticipant }
                onChange={ (event) => { searchParticipant(event.target.value) } }
            />
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