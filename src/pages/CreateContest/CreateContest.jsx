import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contestSchema } from '../../helpers/validationSchema';
import { createId } from '../../helpers/createId';
import { useDispatch } from 'react-redux';
import { createContest } from '../../redux/actions/contestsActions';
import { useHistory } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './CreateContest.scss';

const CreateContest = () => {
    const [inputState, setInputState] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(contestSchema),
    });

    const onInputData  = (event) => {
        setInputState(event.target.value);
    };
    
    const onSubmit = () => {
        const ID = createId();
        dispatch(createContest({ name: inputState, id: ID }));
        history.push('/');
    };

    return (
        <div className='contest-create'>
            <div className='contest-create__body'>
                <h3 className='contest-create__title'>Create contest</h3>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <Input
                        style={ { display: 'block', margin: '0 0 40px' } }
                        { ...register('contestName', {
                            onChange: onInputData,
                        }) }
                        placeholder='Enter name of the contest...'
                        error={ !!errors.contestName }
                        helperText={ errors?.contestName?.message }
                        value={ inputState }
                    />
                    <Button
                        style={ { padding: '19.5px 70px' } }
                        type='submit'
                        disabled={ !isValid }
                    >
                        Create
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default CreateContest;