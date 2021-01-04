import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './Screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
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
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/product/:id' component={ProductScreen} /> 
        <Route path='signin' component={SigninScreen} />
        <Route exact path='/' component={HomeScreen} /> 
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;