import Route1 from './route1.js'
import Route2 from './../containers/route2-container.js'
import PageNotFound from './page-not-found.js'
import React from "react"
import {
	Provider
} from "react-redux"
import configureStore from "./../store/configureStore"

const store = configureStore();
let Map = {
	'notFound': <PageNotFound />,
	'r1': <Route1 />,
	'r2': <Provider store={store}><Route2 /></Provider>
}

class Routes extends React.Component {
	render() {
		let {
			route
		} = this.props.params
		if (route) {
			return route in Map ? Map[route] : <PageNotFound />
		}
		return <Provider store={store}><Route2 /></Provider>
	}
}

export default Routes;