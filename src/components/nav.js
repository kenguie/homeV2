import React, { Component } from 'React';

class Navigation extends Component {
	render() {
		return(
			<div id="nav">
				<a href="//portfolio.kenguie.com">
					<div className="item">Portfolio</div>
				</a>
				<a href="//blog.kenguie.com">
					<div className="item">Blog</div>
				</a>
				<a href="mailto:kg@kenguie.com">
					<div className="item">Email</div>
				</a>
				<a href="//www.linkedin.com/in/kenguie">
					<div className="item">LinkedIn</div>
				</a>
			</div>
		)
	}
}

export default Navigation;