import {
	render
} from "react-dom"
import React from "react"
import Routes from './components/routes.js'
require('./css/rest.less');
require('./css/css.less');

render((
    <Routes/>
), document.getElementById('content'))