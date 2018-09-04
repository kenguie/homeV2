import React, { Component } from 'react';
import Header from './header';
import Nav from './nav';
import Image from './profileImage';
import Bio from './bio';
import Recent from './recentWork';
import Video from './video';
import BizCard from './bizCard';
import Freelance from './freelance';
import Footer from './footer';
import css from '../../public/style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
				<Nav />
				<Image />
				<Bio />
        <Recent />
        <Video />
        <Freelance />
				<BizCard />
				<Footer />
      </div>
    );
  }
}
