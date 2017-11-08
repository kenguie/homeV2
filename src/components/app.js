import React, { Component } from 'react';
import Nav from './nav';
import Image from './profileImage';
import Bio from './bio';
import BizCard from './bizCard';
import Footer from './footer';
import css from '../../public/style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Who is Ken Guie?</h1>
				<Nav />
				<Image />
				<Bio />
				<BizCard />
				<Footer />
      </div>
    );
  }
}
