import React from 'react';
import {StyledFormComponent} from './App.styles';
import {GlobalStyle} from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AboutPage from './components/SubPages/AboutPage';
import FaqPage from './components/SubPages/FaqPage';
import BasketPage from './components/SubPages/BasketPage';
import ContactPage from './components/SubPages/ContactPage';
import NotFoundPage from './components/SubPages/NotFoundPage';
import {ROUTES} from './helpers/routes';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <GlobalStyle />
            <Switch>
                <Route exact path={ROUTES.HOME} component={StyledFormComponent} />
                <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                <Route exact path={ROUTES.FAQ} component={FaqPage} />
                <Route exact path={ROUTES.CONTACT} component={ContactPage} />
                <Route exact path={ROUTES.BASKET} component={BasketPage} />
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
