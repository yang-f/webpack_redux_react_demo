import {
	render
} from "react-dom"
import React from "react"
import $ from 'jquery';
import {
	browserHistory,
	Router,
	Route,
	Link
} from 'react-router';
import Routes from './components/routes.js'
require('./css/rest.less');
require('./css/css.less');

render((
	<Router history={browserHistory}>
    <Route path="/" component={Routes}/>
    <Route path="/:route" component={Routes} />
  </Router>
), document.getElementById('content'));