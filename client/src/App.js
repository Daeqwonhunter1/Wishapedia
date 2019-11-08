import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    message: ""
  }

  componentDidMount = async () => {
    const message = await axios.get('http://localhost:3000')
    this.setState({ message: message.data.message })
  }

  render() {
    return (
      <div className="app" >
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

