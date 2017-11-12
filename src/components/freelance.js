import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class Freelance extends Component {
	render() {
		return(
			<div id="freelance">
        <LazyLoad offsetVertical={500}>
          <img className="freelanceImage" sizes="100vw" srcSet="//res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/http://www.kenguie.com/images/newHomepage/meWorking.jpg 350w, //res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_600/http://www.kenguie.com/images/newHomepage/meWorking.jpg 600w, //res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/http://www.kenguie.com/images/newHomepage/meWorking.jpg 850w" src="//res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/http://www.kenguie.com/images/newHomepage/meWorking.jpg" alt="me on my computer" />
        </LazyLoad>
				<h2>Self Plug for Web Development Services</h2>
        <h3>I'm looking for some freelance work on weekends in the field of Web Development</h3>
        <h3>If you need your website created, redesigned, improved, or moved, I can help!</h3>
        <h3>Click email above and let me know your issues and what you'd like done.</h3>
        <h3>We'll talk about what is involved and gauge how long it might take and we'll get started.</h3>
        <h3>As they say, the first consultation is free! There's nothing to lose!</h3>
        <h5>Examples of work can be found on my portfolio page (some projects are pretty old on that page but the top few show some of my more recent designs). I have experience with ads too if that's something you need. Google's DFP, Taboola, Outbrain to name a few companies I've worked with. Let me know!</h5>
			</div>
		)
	}
}

export default Freelance;