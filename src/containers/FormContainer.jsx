import { useFormStore } from '../context/FormContext';
import { changeTheme } from '../reducers/actions';
import { Switch } from '@material-ui/core';
import '../styles/main.scss';


const FormContainer = ({children, props}) => {
    const [state, dispatch] = useFormStore();

    return (
        <div
            className={ `${'form__container'} ${state.isDarkTheme && 'form__dark-theme'}` }
            {...props}
        >
            <Switch color='default' onClick={ () => dispatch(changeTheme()) }/>
            {children}
        </div>
    );
}

export default FormContainer;