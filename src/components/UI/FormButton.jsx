import { Button } from '@material-ui/core';
import '../../styles/main.scss';

const FormButton = ({ children, ...props }) => {
    return (
        <Button
            id='form__button'
            { ...props }
        >
            { children }
        </Button>
    );
}

export default FormButton;