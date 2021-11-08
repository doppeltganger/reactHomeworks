import Main from './Main';
import FormProvider from '../context/FormContext';
import formReducer, { initialState } from '../reducers/FormReducer';

const App = () => {
    return (
        <FormProvider formReducer={ formReducer } initialState={ initialState }>
            <Main/>
        </FormProvider>
    );
}

export default App;