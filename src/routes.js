import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import React from 'react';
import "babel-polyfill";

import { asyncComponent } from './shared/asyncComponent';

export const AsyncHome = asyncComponent(() => import('./components/home'));
export const AsyncAboutUs = asyncComponent(() => import('./components/aboutus'));
export const AsyncJourney = asyncComponent(() => import('./components/journey'));

class RouterCollection extends React.Component {
   render() {
      return (
         <div className='router-container'>
            <Router>
               <header className="App-header">
                  <NavLink to='/home' activeClassName="selected-menu">Home</NavLink>
                  <NavLink to='/aboutus' activeClassName="selected-menu">About Me</NavLink>
                  <NavLink to='/Journey' activeClassName="selected-menu">My Journey</NavLink>
               </header>
               <div className="routes-container">
                  <Switch>
                     <Route exact path='/'>
                        <Redirect to="/home" />
                     </Route>
                     <Route exact path='/home' component={AsyncHome} />
                     <Route exact path='/aboutus' component={AsyncAboutUs} />
                     <Route exact path='/journey' component={AsyncJourney} />
                  </Switch>
               </div>
               <footer className="App-footer">
                  <Link to='/home'>copyright @ 2019</Link>
               </footer>
            </Router>
         </div>
      );
   }
}

export default RouterCollection;