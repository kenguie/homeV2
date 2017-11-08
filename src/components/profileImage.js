import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class Image extends Component {
	render() {
		return(
			<div id="profileImage">
				<LazyLoad offsetVertical={500}>
					<img src="//res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/http://www.kenguie.com/images/newHomepage/newProfile.jpg" alt="It's me!"/>
				</LazyLoad>
			</div>
		)
	}
}

export default Image;