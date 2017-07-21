import {
	render
} from "react-dom"
import jQuery from 'jquery';
import $ from 'jquery';
import Pic from './pic.js';
import React from "react";
import Nav from './nav.js';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
	browserHistory,
	Router,
	Route,
	Link
} from 'react-router';
let Route1 = React.createClass({
	componentDidMount() {},
	handleSelect(range) {
		console.log(range);
	},
	render() {
		return (
			<div>
            	<MuiThemeProvider>
            		<AppBar
						title="Title"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
            	</MuiThemeProvider>
                this is r1!
            </div>
		)
	}
})
export default Route1;