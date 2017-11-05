import React, { Component } from 'react';
import Nav from './nav.js';
import css from '../../public/style/style.less';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Who is Ken Guie?</h1>
				<Nav />
      </div>
    );
  }
}
