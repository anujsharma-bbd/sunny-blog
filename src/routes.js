import { BrowserRouter, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import React from 'react';
import "babel-polyfill";

import HomeComponent from './components/home';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import JourneyComponent from './components/journey';

class RouterCollection extends React.Component {
   render() {
      return (
         <div className='router-container'>
            <BrowserRouter>
               <header className="App-header">
                  <NavLink to='/home' activeClassName="selected-menu">Home</NavLink>
                  <NavLink to='/aboutus' activeClassName="selected-menu">About Me</NavLink>
                  <NavLink to='/contactus' activeClassName="selected-menu">Contact Me</NavLink>
                  <NavLink to='/Journey' activeClassName="selected-menu">My Journey</NavLink>
               </header>
               <div className="routes-container">
                  <Switch>
                     <Route exact path='/'>
                        <Redirect to="/home" />
                     </Route>
                     <Route exact path='/home' component={HomeComponent} />
                     <Route exact path='/aboutus' component={AboutUs} />
                     <Route exact path='/contactus' component={ContactUs} />
                     <Route exact path='/journey' component={JourneyComponent} />
                  </Switch>
               </div>
               <footer className="App-footer">
                  <Link to='/home'>copyright @ 2019</Link>
               </footer>
            </BrowserRouter>
         </div >
      );
   }
}

export default RouterCollection;