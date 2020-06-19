import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './styles/App.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/productList";
import Details from "./components/details";
import PageNotFound from "./components/pageNotFound";
import Cart from "./components/cart";
import {ProductProvider} from "./productContext";
import {storeProducts} from "./data";
import Modal from "./components/modal";

function App() {
  return (
    <ProductProvider>
      <Navbar/>
      <div className='container mt-3'>
        <Switch>
          <Route path='/' exact component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={PageNotFound}/>
        </Switch>
        <Modal/>
      </div>
    </ProductProvider>
  );
}

export default App;
