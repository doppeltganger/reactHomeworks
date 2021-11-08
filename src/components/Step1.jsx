import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box } from '@material-ui/core';
import { useFormStore } from '../context/FormContext';
import { changeStep, updateInput } from '../reducers/actions';
import { schemaStep1 } from '../helpers/validationSchema';
import FormInput from './UI/FormInput';
import FormButton from './UI/FormButton';
import FormHeader from './UI/FormHeader';
import FormContainer from '../containers/FormContainer';
import '../styles/main.scss';

const Step1 = () => {
    const [state, dispatch] = useFormStore();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemaStep1)
    });

    return (
        <FormContainer>
            <form noValidate>
                <FormHeader>Step: 1</FormHeader>

                <Box className='form__block'>
                    <FormInput
                        { ...register('firstName') }
                        placeholder='Enter first name'
                        type='text'
                        value={ state.userData.firstName }
                        onChange={(event) => dispatch(updateInput('firstName', event.target.value))}
                        error={ !!errors.firstName }
                        helperText={ errors?.firstName?.message }
                    />
                </Box>

                <Box className='form__block'>
                    <FormInput
                        { ...register('lastName') }
                        placeholder='Enter last name'
                        type='text'
                        value={ state.userData.lastName }
                        onChange={ (event) => dispatch(updateInput('lastName', event.target.value)) }
                        error={ !!errors.lastName }
                        helperText={ errors?.lastName?.message }
                    />
                </Box> 

                <Box className='form__block'>
                    <FormInput
                        { ...register('email') } 
                        placeholder='Enter email'
                        type='email'
                        value={ state.userData.email }
                        onChange={ (event) => dispatch(updateInput('email', event.target.value)) }
                        error={ !!errors.email }
                        helperText={ errors?.email?.message }
                    />
                </Box>

                <FormButton onClick={ handleSubmit(() => dispatch(changeStep(2))) }>Next</FormButton>
            </form>
        </FormContainer>
    );
}

export default Step1;