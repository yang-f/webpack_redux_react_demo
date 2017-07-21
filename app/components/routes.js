import App from './index.js'
import Route1 from './route1.js'
import Route2 from './../containers/route2-container.js'
import PageNotFound from './page-not-found.js'
import React from "react"
import {
	Provider
} from "react-redux"
import {
	browserHistory,
	Router,
	Route,
	Redirect,
	Link
} from 'react-router';
import configureStore from "./../store/configureStore"

const store = configureStore();

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

class Routes extends React.Component {
	render() {
		return(
			<Provider store={store}>
		        <Router history={browserHistory}>
		            <Route path="/" component={App}>
		                <Route path="about" component={Route1} />
		                <Route path="inbox" component={Route2}>
		                    <Route path="messages/:id" component={Message} />
		                </Route>
		                <Route path='404' component={PageNotFound} />
		                <Redirect from='*' to='404' />
		            </Route>
		        </Router>
		    </Provider>
		)
	}
}

export default Routes;