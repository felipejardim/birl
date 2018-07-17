import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .them(res => {console.log(res)});
  }
  
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

