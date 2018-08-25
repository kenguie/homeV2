import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class BizCard extends Component {
	render() {
		return(
			<div id="businessCard">
			<a href="//www.linkedin.com/in/kenguie" target="_blank">
				<LazyLoad offsetVertical={500}>
					<img src="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/https://www.kenguie.com/images/newHomepage/bizCard2.jpg" alt="Business Card"/>
				</LazyLoad>
			</a>
			</div>
		)
	}
}

export default BizCard;