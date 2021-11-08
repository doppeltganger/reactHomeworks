import { Typography } from '@material-ui/core';
import { useFormStore } from '../../context/FormContext';

const FormHeader = ({ children, ...props }) => {
    const [state] = useFormStore();

    const colorHeader = state.isDarkTheme ? { color: '#ddc3a5' } : { color: '#000' }

    return (
        <Typography style={ colorHeader } variant='h6' align='center' { ...props }>
            {children}
        </Typography>
    );
}

export default FormHeader;