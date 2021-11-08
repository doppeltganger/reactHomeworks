import { useFormStore } from '../context/FormContext';
import FormHeader from './UI/FormHeader';
import FormContainer from '../containers/FormContainer';
import '../styles/main.scss';

const Step5 = () => {
    const [state] = useFormStore();

    return (
        <FormContainer>
            <FormHeader>Thank you for your registering!</FormHeader>

            <div className = 'form__image-wrap'>
                <img
                    className = 'form__image'
                    src={ state.userData.image.imagePreview }
                    alt='avatar'
                />
            </div>

            <h3>Contact information</h3>
            <p>First name: { state.userData.firstName }</p>
            <p>Last name: { state.userData.lastName }</p>
            <p>Email: { state.userData.email }</p>
            <p>Town: { state.userData.town }</p>
            <p>Street: { state.userData.street }</p>
            <p>House: { state.userData.house }</p>
        </FormContainer>
    );
}

export default Step5;