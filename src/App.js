import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home'
import Contact from './Pages/ContactPage/Contact'
import ShopCart from './Pages/ShopCartPage/ShopCart'
import MenShoes from './Pages/ProductPage/Men/MenShoes';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/shop-cart' component={ShopCart} />
      <Route path='/men' component={MenShoes} />


      </Switch>

    </div>
  );
}

export default App;
