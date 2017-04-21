import React from 'react';

let Pic = React.createClass({
	render: function() {
		return (
			<div className="productBox">
      		<img src={this.props.imageURL} />
      	</div>
		);
	}
});
export default Pic;