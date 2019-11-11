import React from 'react';
import './App.css';
import {
  showWishLists, postWishList, destroyOneWishList, UpdateOneWishList,
  loginUser, registerUser, verifyUser
} from './services/api-helper'
import { Route, Link, withRouter } from 'react-router-dom';
import WishlistList from './components/WishlistList';
import CreateWishlist from './components/CreateWishlist';
import SingleWishList from './components/SingleWishlist';
import UpdateWishlistForm from './components/UpdateWishlistForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';




class App extends React.Component {
  state = {
    currentUser: null,
    currentWishlist: null,
    wishlists: [],
    currentItem: null,
    items: [],
    wishlistFormData: {
      name: null,
      description: null,
      type: null
    },
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
    console.log(`current user = ${this.state.currentUser}`)
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
  }

  componentDidMount() {
    this.getAllWishlists();
    this.handleVerify()

  }

  // =============== HANDLE CHANGE ===============

  handleWishListChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      wishlistFormData: {
        ...prevState.wishlistFormData,
        [name]: value
      }
    }))
  }

  handleItemChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      itemFormData: {
        ...prevState.itemFormData,
        [name]: value
      }
    }))
  }

  // =============== Read ===============

  getAllWishlists = async () => {
    const wishlists = await showWishLists()
    this.setState({ wishlists })
  }


  // =============== Create ===============

  createWishlist = async () => {
    const newWishlist = await postWishList(this.state.wishlistFormData);
    this.setState(prevState => ({
      wishlists: [...prevState.wishlists, newWishlist]
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Delete ===============

  destroyWishlist = async (wishlistId) => {
    await destroyOneWishList(wishlistId);
    this.setState(prevState => ({
      wishlists: prevState.wishlists.filter(wishlist => {
        return wishlist.id !== wishlistId
      })
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Update ===============

  updateWishlist = async (wishlistId) => {
    const updatedWishlist = await UpdateOneWishList(wishlistId, this.state.wishlistFormData);
    this.setState(prevState => ({
      wishlists: prevState.wishlists.map(wishlist =>
        wishlist.id === parseInt(wishlistId)
          ? updatedWishlist
          : wishlist)
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Set State Helper ===============

  setWishlistFormData = (wishlist) => {
    this.setState({
      speakerFormData: {
        name: wishlist.name,
        description: wishlist.description,
        type: wishlist.type
      }
    })
    this.props.history.push(`/wishlists/${wishlist.id}/edit`)
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

          {/* ================= Site Routes ====================== */}

          <Route exact path='/' render={() => (<WishlistList wishlists={this.state.wishlists} />)} />
          <Route exact path='/wishlists' render={() => (<WishlistList wishlists={this.state.wishlists} />)} />

          <Route exact path='/wishlists/:wishlists' render={(props) => {
            const wishlists = props.match.params.id;
            const wishlist = this.state.wishlists.find(wishlist => {
              return wishlist.id === parseInt(wishlists)
            })
            return <SingleWishList
              setWishlistFormData={this.setWishlistFormData}
              destroyOneWishList={this.destroyOneWishList}
              wishlist={wishlist}
            />
          }} />
          <Route path='/wishlists/new' render={() => (
            <CreateWishlist
              createWishlist={this.createWishlist}
              handleWishListChange={this.handleWishListChange}
              wishlistFormData={this.state.wishlistFormData}
            />
          )} />
          <Route path='/wishlists/:wishlistId/edit' render={(props) => (
            <UpdateWishlistForm
              wishlistId={props.match.params.wishlistId}
              updateWishlist={this.updateWishlist}
              handleWishListChange={this.handleWishListChange}
              wishlistFormData={this.state.wishlistFormData}
            />
          )} />
        </main>
        <footer>
          <hr></hr>
          <small>2019 © Crazy Demons</small>
        </footer>

      </div>
    );
  }
}

export default withRouter(App);