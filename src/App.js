import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home'
import Contact from './Pages/ContactPage/Contact'
import ShopCart from './Pages/ShopCartPage/ShopCart'
import MenShoes from './Pages/ProductPage/Men/MenShoes';
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/shop-cart' component={ShopCart} />
      <Route path='/men' component={MenShoes} />
      <Route path='/men' component={MenShoes} />
      <Route path='/product/:id' component={ProductDetails} />



      </Switch>

    </div>
  );
}

export default App;
