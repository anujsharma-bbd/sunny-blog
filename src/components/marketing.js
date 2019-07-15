import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { asyncComponent } from '../shared/asyncComponent';

const AsyncDigitalMarketing = asyncComponent(() => import('./sub-components/digital-marketing'));
const AsyncGAdsMarketing = asyncComponent(() => import('./sub-components/google-adwords'));


class Marketings extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const { match } = this.props;
      return (
         <div className="services">
            <br />
            <h2><span className="cnt-header">Marketings</span></h2>
            <br />
            <ul className="services-links">
               <li>
                  <NavLink to={`${match.path}/what-is-digital-marketing`} exact activeClassName="selected-sub-menu">what is digital marketing?</NavLink>
               </li>
               <li>
                  <NavLink to={`${match.path}/what-is-google-adwords`} exact activeClassName="selected-sub-menu">what is google adwords?</NavLink>
               </li>
            </ul>
            <div className="marketings-section">
               <Switch>
                  <Route exact path={`${match.path}`}>
                     <Redirect to={`${match.path}/what-is-digital-marketing`} />
                  </Route>
                  <Route path={`${match.path}/what-is-digital-marketing`} component={AsyncDigitalMarketing} />
                  <Route path={`${match.path}/what-is-google-adwords`} component={AsyncGAdsMarketing} />
               </Switch>
            </div>
         </div>
      );
   }
}

export default Marketings;