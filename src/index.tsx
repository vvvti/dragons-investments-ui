import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
//components imports
import App from './App';
import AboutPage from './components/SubPages/AboutPage';
import FaqPage from './components/SubPages/FaqPage';
import CartPage from './components/SubPages/CartPage';
import ContactPage from './components/SubPages/ContactPage';

const routing = (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/About" component={AboutPage} />
                <Route exact path="/Faq" component={FaqPage} />
                <Route exact path="/Contact" component={ContactPage} />
                <Route exact path="/Cart" component={CartPage} />
            </Switch>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
