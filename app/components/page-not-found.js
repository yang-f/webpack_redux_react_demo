import {
	render
} from "react-dom"
import Pic from './pic.js';
import React from "react"
import {
	browserHistory,
	Router,
	Route,
	Link
} from 'react-router';
let PageNotFound = React.createClass({
	render() {
		return (
			<div>
                <div><Link to="/index" activeClassName="active">404</Link></div>
            </div>
		)
	}
})
export default PageNotFound;