
import Route1 from './route1.js'
import React from "react"
import Nav from './nav.js';

const App = React.createClass({
    render() {
        let content = this.props.children || <Route1/>
        return (
            <div>
                <div id="nav"><Nav /></div>
                <div className="statisics">
                    {content}
                </div>
            </div>
        )
    }
})

export default App;