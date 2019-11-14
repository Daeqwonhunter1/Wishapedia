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




class App extends React.Component {
  state = {
    currentUser: null,
    currentItem: null,
    items: [],
    itemFormData: {
      name: null,
      image_url: null,
      url: null,
      price: null,
      comments: null
    }

  }

  // =============== AUTH ===============

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
    this.props.history.push("/")
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
    this.props.history.push("/")
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
    return (
      <div className="app" >
        <header>
          <Link to="/"><h2>Wishapedia</h2></Link>
          {
            this.state.currentUser ?
              <div>
                <p>{`Hello, ${this.state.currentUser.username}`}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </div>
              :
              <Link to='/login'><button>Login/register</button></Link>
          }
          <hr></hr>

        </header>
        <main>
          {/* ================= Auth Routes ====================== */}
          <Route path='/login' render={() => (
            <LoginForm
              handleLogin={this.handleLogin}
            />
          )} />
          <Route path='/register' render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
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