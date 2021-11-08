import { Box } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useFormStore } from '../context/FormContext';
import { changeStep, updateInput } from '../reducers/actions';
import { schemeStep2 } from '../helpers/validationSchema';
import FormInput from './UI/FormInput';
import FormButton from './UI/FormButton';
import FormHeader from './UI/FormHeader';
import FormContainer from '../containers/FormContainer';
import '../styles/main.scss';

const Step2 = () => {
    const [state, dispatch] = useFormStore();

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schemeStep2)
    });

    return (
        <FormContainer>
            <form noValidate>
                <FormHeader>Step: 2</FormHeader>

                <Box className='form__block'>
                    <FormInput
                        { ...register('town') }
                        placeholder='Enter name of town'
                        value={ state.userData.town }
                        onChange={ (event) => dispatch(updateInput('town', event.target.value)) }
                        type='text'
                        error={ !!errors.town }
                        helperText={ errors?.town?.message }
                    />
                </Box>

                <Box className='form__block'>
                    <FormInput
                        { ...register('street') }
                        placeholder='Enter name of street'
                        value={ state.userData.street }
                        onChange={ (event) => dispatch(updateInput('street', event.target.value)) }
                        type='text'
                        error={ !!errors.street }
                        helperText={ errors?.street?.message }
                    />
                </Box>

                <Box className='form__block'>
                    <FormInput
                        { ...register('house') }
                        placeholder='Enter number of house'
                        value={ state.userData.house }
                        onChange={ (event) => dispatch(updateInput('house', event.target.value)) }
                        type='text'
                        error={ !!errors.house }
                        helperText={ errors?.house?.message }
                    />
                </Box>

                <Box display='flex' justifyContent='space-around'>
                    <FormButton onClick={ () => dispatch(changeStep(1)) }>Previous</FormButton>
                    <FormButton onClick={ handleSubmit(() => dispatch(changeStep(3))) }>Next</FormButton>
                </Box>
            </form>
        </FormContainer>
    );
}

export default Step2;