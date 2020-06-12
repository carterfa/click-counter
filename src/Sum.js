import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Sum(props) {
    return <h1>
        {props.a} + {props.b} = {props.a + props.b}
    </h1>;
}

export default Sum;