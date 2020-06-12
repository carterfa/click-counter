import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <h1>Hello at {this.props.now}</h1>
    );
  }
}

export default Hello;
