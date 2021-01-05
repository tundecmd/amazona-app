import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { Signout } from './actions/userActions';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(Signout())
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">amazona</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          { cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          ) }
          </Link>
          {
            userInfo ? (
              <div className="dropdown">
                <Link to='#'>{userInfo.fullname} <i className="fa fa-caret-down"></i>{' '}</Link>
                <ul className="dropdown-content">
                  <Link to='/' onClick={signoutHandler}>SignOut</Link>
                </ul>
              </div>
              
            ) : (
              <Link to="/signin">Sign In</Link>
            )
          }
          
        </div>
      </header>
      <main>
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/product/:id' component={ProductScreen} /> 
        <Route path='/signin' component={SigninScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route exact path='/' component={HomeScreen} /> 
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;