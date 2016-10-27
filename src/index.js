import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './components/homepage/Home';

import NotFound from './components/notFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}> 
            <IndexRoute component={Home} />

            <Route path='*' component={NotFound} />

        </Route>
    </Router>
), document.getElementById('root'))