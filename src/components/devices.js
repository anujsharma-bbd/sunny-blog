import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { asyncComponent } from '../shared/asyncComponent';

const AsyncPrinters = asyncComponent(() => import('./sub-components/printers'));

class DevicesComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { match } = this.props;
        return (
            <div className='devices'>
                <Switch>
                    <Route exact path={`${match.path}`}>
                        <Redirect to={`${match.path}/printers`} />
                    </Route>
                    <Route exact path={`${match.path}/printers`} component={AsyncPrinters} />
                </Switch>
            </div>
        );
    }
}

export default DevicesComponents;