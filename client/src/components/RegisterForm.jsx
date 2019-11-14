import React, { Component } from 'react';


export default class RegisterForm extends Component {
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
      <div className = "register-div">
        <form className = "register-div-form" onSubmit={(e) => {
          e.preventDefault()
          this.props.handleRegister(this.state)
          this.setState({
            username: "",
            password: ""
          })
        }}>
          <h2 id="register">Create an account</h2>
         
          {/* <label id ="username-label" htmlFor="username">username</label> */}
          <input className = "user-input"
            name="username"
            id="register-username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}></input>

          {/* <label htmlFor="password">password</label> */}

          <input
            name="password"
            id="register-password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}></input>

          <button id = "register-submit-button">Submit</button>
          <br />
          <p>{this.props.authErrorMessage}</p>
        </form>
      </div>
    )
  }
}