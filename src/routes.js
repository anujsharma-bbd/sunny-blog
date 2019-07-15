import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import React from 'react';
import "babel-polyfill";

import { asyncComponent } from './shared/asyncComponent';
import profileImg from './assets/sunny-profile.jpg';

const AsyncHome = asyncComponent(() => import('./components/home'));
const AsyncAboutUs = asyncComponent(() => import('./components/aboutus'));
const AsyncJourney = asyncComponent(() => import('./components/journey'));
const AsyncContactUs = asyncComponent(() => import('./components/contactus'));
const AsyncMarketing = asyncComponent(() => import('./components/marketing'));

class RouterCollection extends React.Component {
   render() {
      return (
         <div className='router-container'>
            <Router>
               <header className="App-header">
                  <div className="profile">
                     <img alt="" src={profileImg} className="icon" />
                     <div className="full-blog">Sunny&nbsp;Sharma's&nbsp;blog</div>
                     <div className="short-blog">Sunny</div>
                  </div>
                  <NavLink to='/marketings' exact activeClassName="selected-menu">Marketing</NavLink>
                  <NavLink to='/contactus' exact activeClassName="selected-menu">Contact Us</NavLink>
                  <NavLink to='/journey' exact activeClassName="selected-menu">Journey</NavLink>
                  <NavLink to='/aboutme' exact activeClassName="selected-menu">About Me</NavLink>
                  <NavLink to='/' exact activeClassName="selected-menu">Home</NavLink>
               </header>

               <div className="routes-container">
                  <Switch>
                     <Route exact path='/' component={AsyncHome} />
                     <Route exact path='/aboutme' component={AsyncAboutUs} />
                     <Route exact path='/journey' component={AsyncJourney} />
                     <Route exact path='/contactus' component={AsyncContactUs} />
                     <Route path='/marketings' component={AsyncMarketing} />
                  </Switch>
               </div>
               {  /*      // <footer className="App-footer">
               //    <Link to='/home'>copyright @ 2019</Link>
               // </footer>
      */
               }
            </Router>
         </div>
      );
   }
}

export default RouterCollection;