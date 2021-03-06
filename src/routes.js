import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import React from 'react';
import "babel-polyfill";

import { asyncComponent } from './shared/asyncComponent';
import profileImg from './assets/sunny-profile.jpg';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const AsyncHome = asyncComponent(() => import('./components/home'));
const AsyncAboutUs = asyncComponent(() => import('./components/aboutus'));
const AsyncJourney = asyncComponent(() => import('./components/journey'));
const AsyncContactUs = asyncComponent(() => import('./components/contactus'));
const AsyncMarketing = asyncComponent(() => import('./components/marketing'));
const AsynDevices = asyncComponent(() => import('./components/devices'));

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
                  <ul className="menu-header">
                     <UncontrolledDropdown>
                        <NavLink to='/devices' className="sub-menu-class" activeClassName="selected-menu">
                           <DropdownToggle nav caret>
                              Devices
                           </DropdownToggle>
                        </NavLink>
                        <DropdownMenu right>
                           <DropdownItem tag="span" className="p-0">
                              <NavLink tag="div" to={`/devices/printers`} className="submenu-item" exact activeClassName="selected-sub-menu">Printers</NavLink>
                           </DropdownItem>
                        </DropdownMenu>
                     </UncontrolledDropdown>
                  </ul>
                  <ul className="menu-header">
                     <UncontrolledDropdown>
                        <NavLink to='/marketings' className="sub-menu-class" activeClassName="selected-menu">
                           <DropdownToggle nav caret>
                              Marketing
                           </DropdownToggle>
                        </NavLink>
                        <DropdownMenu right>
                           <DropdownItem tag="span" className="p-0">
                              <NavLink tag="div" to={`/marketings/what-is-digital-marketing`} className="submenu-item" exact activeClassName="selected-sub-menu">What is Digital Marketing?</NavLink>
                           </DropdownItem>
                           <DropdownItem tag="span" className="p-0">
                              <NavLink tag="div" to={`/marketings/what-is-google-adwords`} className="submenu-item" exact activeClassName="selected-sub-menu">What is Google Adwords?</NavLink>
                           </DropdownItem>
                        </DropdownMenu>
                     </UncontrolledDropdown>
                  </ul>
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
                     <Route path='/devices' component={AsynDevices} />
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