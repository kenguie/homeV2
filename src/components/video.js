import React, { Component } from 'React';

class Video extends Component {
	render() {
		return(
			<div id="video">
        <h1>Meet Ken Guie, hear about what he knows, what he wants to work on, and if he can help you!</h1>
        <video id="content_video" className="video-js vjs-default-skin" controls preload="auto">
          <source src="http://www.kenguie.com/bioVideo/BioVidForHomePage-web-8.19.18.mp4" type="video/mp4" />
        </video>
			</div>
		)
	}
}

export default Video;