import { useFormStore } from '../context/FormContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Container } from '@material-ui/core';

const Main = () => {
    const [state] = useFormStore();

    const createForm = () => {
        switch (state.step) {
            case 1:
                return <Step1/>
            case 2:
                return <Step2/>
            case 3:
                return <Step3/>
            case 4:
                return <Step4/>
            case 5:
                return <Step5/>
            default:
                return <Step1/>
        }
    };

    return (
        <Container>
            {createForm()}
        </Container>
    );
}

export default Main;