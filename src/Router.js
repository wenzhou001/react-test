import React from 'react'
import App from './containers/App';
import About from './About';
import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
const history = createHashHistory();


const RouteWrapper = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/about' component={About} />
            </Switch>
        </Router>
    )
}

export default RouteWrapper;