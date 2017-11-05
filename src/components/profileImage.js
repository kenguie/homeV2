import React, { Component } from 'React';

class Image extends Component {
	render() {
		return(
			<div id="profileImage">
				<img src="//res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_500/http://www.kenguie.com/images/newHomepage/newProfile.jpg" alt="It's me!"/>
				<h1>Hi!</h1>
			</div>
		)
	}
}

export default Image;