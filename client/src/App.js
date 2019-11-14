import React from 'react';
import './App.css';
import {
  loginUser, registerUser, verifyUser
} from './services/api-helper'
import { Route, Link, withRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WishlistContainer from './components/WishlistContainer';
import ItemContainer from './components/ItemContainer';
import logo from './images/Wishapedia.png'

class App extends React.Component {
  state = {
    currentUser: null,
    authErrorMessage: "",
    currentItem: null,
    items: [],
    hasError: false,
    itemFormData: {
      name: null,
      image_url: null,
      url: null,
      price: null,
      comments: null
    }

  }

  // =============== AUTH ===============

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData)
    if (currentUser.error) {
      this.setState({ authErrorMessage: currentUser.error })
      console.log("i don't work")
    } else {
      this.setState({ currentUser })
      this.props.history.push("/")
    }
  }

  logErrorToMyService = async () => {
    await this.setState({
      hasError: true
    })
  }


  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);

    if (this.state.hasError) {
      this.logErrorToMyService();
      // this.setState({ authErrorMessage: currentUser.error })
      console.log("i don't work")
    } else {
      this.setState({ currentUser });
      this.props.history.push("/")
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
  }

  componentDidMount() {
    this.handleVerify()

  }

  // =============== HANDLE CHANGE ===============

  handleItemChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      itemFormData: {
        ...prevState.itemFormData,
        [name]: value
      }
    }))
  }

  // =============== Render ===============

  render() {
    
    const errorMessage = this.state.hasError
      ? <p>  Error</p> : null
    return (
      <div className="app" >
        <header>
          {/* <Link to='/'><img src={logo} /></Link> */}
            <Link to="/"><h2>Wishapedia</h2></Link>
          {
            this.state.currentUser ?
              <div id="user-info">

                <p id = "user">{`Hello, ${this.state.currentUser.username}`}</p>
                <Link to = '/register'><button id = "logout-button" onClick={this.handleLogout}>Logout</button></Link>

              </div>
              :
              <Link to='/login'><button id="login-logout-button">Login/register</button></Link>
          }
          <hr></hr>

        </header>
        <main>
          {/* ================= Auth Routes ====================== */}
          <Route path='/login' render={() => (
            <LoginForm
              handleLogin={this.handleLogin}
              authErrorMessage={this.state.authErrorMessage}

            />
          )} />
          <Route path='/register' render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
              authErrorMessage={this.state.authErrorMessage}

            />
          )} />

          <WishlistContainer currentUser={this.state.currentUser} />
          <ItemContainer currentUser={this.state.currentUser} />
        </main>
        <footer>
          <hr></hr>
          <small>2019 © Crazy Demons</small>
          <a href="https://www.vecteezy.com/"> Vectors by Vecteezy</a>
        </footer>

      </div>
    );
  }
}

export default withRouter(App);