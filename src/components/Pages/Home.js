import React, { Component } from 'react';
import ItemsList from '../Items/Items';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello,</h1>
        <ItemsList />
      </div>
    );
  }
}

export default Home;
