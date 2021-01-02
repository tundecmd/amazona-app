import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazona</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path='/product/:id' component={ProductScreen} /> 
        <Route exact path='/' component={HomeScreen} /> 
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;