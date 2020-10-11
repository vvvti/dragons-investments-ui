import React from 'react';
import {StyledFormComponent} from './App.styles';
import {GlobalStyle} from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import AboutPage from './components/SubPages/AboutPage';
import FaqPage from './components/SubPages/FaqPage';
import CartPage from './components/SubPages/CartPage';
import ContactPage from './components/SubPages/ContactPage';

export const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <GlobalStyle />
                    <Switch>
                        <Route exact path="/" component={StyledFormComponent} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/faq" component={FaqPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/cart" component={CartPage} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
