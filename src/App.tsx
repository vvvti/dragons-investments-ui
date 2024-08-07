import React from 'react';
import {StyledFormComponent} from './App.styles';
import {GlobalStyle} from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import {Route, Router, Switch} from 'react-router-dom';
import {AboutPage} from './components/SubPages/AboutPage';
import {FaqPage} from './components/SubPages/FaqPage';
import {BasketPage} from './components/SubPages/BasketPage';
import {ContactPage} from './components/SubPages/ContactPage';
import {NotFoundPage} from './components/SubPages/NotFoundPage';
import {OfferPage} from './components/SubPages/OfferPage/OfferPage';
import {ROUTES} from './helpers/routes';
import {createBrowserHistory} from 'history';

export const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Navbar />
            <GlobalStyle />
            <Switch>
                <Route exact path={ROUTES.HOME} component={StyledFormComponent} />
                <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                <Route exact path={ROUTES.OFFER} component={OfferPage} />
                <Route exact path={ROUTES.FAQ} component={FaqPage} />
                <Route exact path={ROUTES.CONTACT} component={ContactPage} />
                <Route exact path={ROUTES.BASKETID} component={BasketPage} />
                <Route exact path={ROUTES.BASKET} component={BasketPage} />

                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
