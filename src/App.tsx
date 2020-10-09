import React, {Fragment} from 'react';
import {StyledFormComponent} from './App.styles';
import {GlobalStyle} from './styles/GlobalStyles';

export const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <StyledFormComponent />
        </Fragment>
    );
};
export default App;
