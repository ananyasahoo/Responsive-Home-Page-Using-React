import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch} from  'react-router-dom';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/design' component={Design} />

      </Switch>
    </Router>
   );
}

export default App;
