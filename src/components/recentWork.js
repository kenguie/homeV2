import React, { Component } from 'React';
import LazyLoad from 'react-lazy-load';

class Recent extends Component {
	render() {
		return(
			<div id="recentWork">
        <h1>Here's where I'll place some images of recent work and / or designs.</h1>
        <h2>There's also a portfolio link above but I'll be moving some newer stuff out here as I get the chance.</h2>
        <h2>Some images / links here are from the most recent. I did a few demos for Williams-Sonoma as well as for a brand called Sparta</h2>
        <h2>I'm really proud of them and hope you think they look great too!</h2>
        <div className='images'>
          <a href="https://kenguie.github.io/WS-Fun/">
            <LazyLoad>
              <img className="work1" sizes="100vw" srcSet="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/https://www.kenguie.com/images/workStuff/WS-desktop.png 350w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_600/https://www.kenguie.com/images/workStuff/WS-desktop.png 600w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/https://www.kenguie.com/images/workStuff/WS-desktop.png 850w" src="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/https://www.kenguie.com/images/workStuff/WS-desktop.png" alt="Williams-Sonoma" />
            </LazyLoad>
          </a>
          <a href="https://kenguie.github.io/WS-Fun/">
            <LazyLoad>
              <img className="work2" sizes="100vw" srcSet="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_50/https://www.kenguie.com/images/workStuff/WS-mobile.png 350w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_200/https://www.kenguie.com/images/workStuff/WS-mobile.png 600w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/https://www.kenguie.com/images/workStuff/WS-mobile.png 850w" src="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/https://www.kenguie.com/images/workStuff/WS-mobile.png" alt="Williams-Sonoma" />
            </LazyLoad>
          </a>
          <a href="https://special-project.surge.sh/">
            <LazyLoad>
              <img className="work3" sizes="100vw" srcSet="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_350/https://www.kenguie.com/images/workStuff/sparta.png 350w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_600/https://www.kenguie.com/images/workStuff/sparta.png 600w, https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/https://www.kenguie.com/images/workStuff/sparta.png 850w" src="https://res.cloudinary.com/image77/image/fetch/dpr_auto,f_auto,q_auto,w_850/https://www.kenguie.com/images/workStuff/sparta.png" alt="Sparta" />
            </LazyLoad>
          </a>
        </div>
			</div>
		)
	}
}

export default Recent;