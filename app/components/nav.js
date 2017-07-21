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
let Nav = React.createClass({
	render() {
		return (
			<nav>
                <div className="logo"><Link to="/" activeClassName="active"></Link></div>
                <div className="nav_list">
                    <ul>
                        <li><Link to="/about" activeClassName="active">r1</Link></li>
                        <li><Link to="/inbox" activeClassName="active">r2</Link></li>
                    </ul>
                </div>
            </nav>
		)
	}
})
export default Nav;