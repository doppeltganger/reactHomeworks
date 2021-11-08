import { Box } from '@material-ui/core';
import { useFormStore } from '../context/FormContext';
import { changeStep, selectAvatar } from '../reducers/actions';
import { avatars } from '../data/avatars';
import { v4 as id } from 'uuid';
import FormContainer from '../containers/FormContainer';
import FormHeader from './UI/FormHeader';
import FormButton from './UI/FormButton';
import '../styles/main.scss';

function Step3() {
    const [state, dispatch] = useFormStore();

    function handleUploadAvatar(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (/(?<=image\/)((jpeg)|(png))/.test(reader.result)) {
            return dispatch(selectAvatar(reader.result));
            }
        };
    }

    function handleSelectAvatar(event) {
        event.target.src && dispatch(selectAvatar(event.target.src));
    };

    return (
        <FormContainer>
            <form noValidate>
                <FormHeader>Step: 3</FormHeader>

                <label htmlFor='form__input-file'>
                    <input
                        id='form__input-file' 
                        multiple type='file'
                        onChange={ handleUploadAvatar }
                    />
                    <FormButton component='span' fullWidth>Upload</FormButton>
                </label>
                
                <Box className='form__block'>
                    {state.userData.image.imagePreview === '' ? (
                        <FormHeader>You need to upload or select an avatar</FormHeader>
                    ) : (
                        <img
                            className='form__avatar-item'
                            multiple type = 'file'
                            src={ state.userData.image.imagePreview }
                            alt='avatar'
                        />
                    )}
                </Box>
        
                <Box
                    className='form__block'
                    onClick={ handleSelectAvatar }
                >
                    {avatars.map((item) => {
                        return (
                            <img
                                className='form__avatar-list'
                                src={ item }
                                key={ id() }
                                alt='avatar'
                            />
                        );
                    })}
                </Box>
        
                <Box display='flex' justifyContent='space-around'>
                    <FormButton onClick={ () => dispatch(changeStep(2)) }>Previous</FormButton>
                    <FormButton onClick={ () => dispatch(changeStep(4)) } disabled={ !state.userData.image.imagePreview }>Next</FormButton>
                </Box>
            </form>
        </FormContainer>
    );
}

export default Step3;