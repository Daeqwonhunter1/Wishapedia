import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state)
          this.setState({
            username: "",
            password: ""
          })
        }}>
          <h2>Login</h2>
          <label htmlFor="username">username</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}></input>

          <label htmlFor="password">password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}></input>

          <button>Submit</button>
          <Link to="/register">Not registered? Register here.</Link>
          <br />
          <p>{this.props.authErrorMessage}</p>
        </form>
      </div>
    )
  }
}