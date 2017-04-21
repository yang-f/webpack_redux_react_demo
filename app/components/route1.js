import {
	render
} from "react-dom"
import jQuery from 'jquery';
import $ from 'jquery';
import Pic from './pic.js';
import React from "react";
import Nav from './nav.js';
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
                <div id="nav"><Nav /></div>
                <div className="statisics">
                    this is r1!
                </div>
            </div>
		)
	}
})
export default Route1;