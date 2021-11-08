import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../context/FormContext';
import { changeStep, updateInput } from '../reducers/actions';
import { schemeStep4 } from '../helpers/validationSchema';
import { Box } from '@material-ui/core';
import FormInput from './UI/FormInput';
import FormButton from './UI/FormButton';
import FormHeader from './UI/FormHeader';
import FormContainer from '../containers/FormContainer';
import '../styles/main.scss';

const Step4 = () => {
    const [state, dispatch] = useFormStore();

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemeStep4)
    });

    return (
        <FormContainer>
            <form noValidate>
                <FormHeader>Step: 4</FormHeader>

                <Box className='form__block'>
                    <FormInput
                        { ...register('password') }
                        placeholder='Enter password'
                        value={ state.userData.password }
                        onChange={ (event) => dispatch(updateInput('password', event.target.value)) }
                        type='password'
                        error={ !!errors.password }
                        helperText={ errors?.password?.message }
                    />
                </Box>

                <Box className='form__block'>
                    <FormInput
                        { ...register('confirmedPassword') }
                        placeholder='Confirm password'
                        value={ state.userData.confirmedPassword }
                        onChange={ (event) => dispatch(updateInput('confirmedPassword', event.target.value)) }
                        type='password'
                        error={ !!errors.confirmedPassword }
                        helperText={ errors?.confirmedPassword?.message }
                    />
                </Box>

                <Box display='flex' justifyContent='space-around'>
                    <FormButton onClick={ () => dispatch(changeStep(3)) }>Previous</FormButton>
                    <FormButton onClick={ handleSubmit(() => dispatch(changeStep(5))) }>Next</FormButton>
                </Box>
            </form>
        </FormContainer>
    );
}

export default Step4;