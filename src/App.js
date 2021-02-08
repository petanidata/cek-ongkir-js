import React, { Component } from 'react'
import Form from './components/Form';
import './App.css';
//import { API_URL } from './utilities/constant';
import axios from 'axios';

const API_URL = 'https://api.rajaongkir.com/starter/';
const API_KEY = 'a7cba2f9daff975e75ecd38578009930';

/*
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.rajaongkir.com/starter/city',
  qs: {id: '39', province: '5'},
  headers: {key: 'your-api-key'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
*/

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       kotaAsal: [],
       kotaTujuan: [],
       hasil: []
    }
  }

  componentDidMount() {
    let config = {
      headers: {
        key: {API_KEY}
      }
    }
    axios
      .get(API_URL + 'city', config)
      .then(res => {
        const kotaAsal = res.data;
        console.log(kotaAsal)
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App">
        <Form />
    </div>
    )
  }
}