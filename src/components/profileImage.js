import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class Image extends Component {
	render() {
		return(
			<div id="profileImage">
				<div className='container'>
					<LazyLoad offsetVertical={500}>
						<img src="http://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/http://www.kenguie.com/images/newHomepage/newProfile.jpg" alt="It's me!"/>
					</LazyLoad>
				</div>
			</div>
		)
	}
}

export default Image;