import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class BizCard extends Component {
	render() {
		return(
			<div id="businessCard">
				<LazyLoad offsetVertical={500}>
					<img src="//res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/http://www.kenguie.com/images/newHomepage/bizCard2.jpg" alt="Business Card"/>
				</LazyLoad>
			</div>
		)
	}
}

export default BizCard;