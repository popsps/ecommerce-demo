// context API
import React, {Component} from 'react';
import {storeProducts} from "./data";

// provider, consumer
const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    // products: storeProducts
    products: []
  }

  componentDidMount() {
    const tempProducts = []
    storeProducts.forEach(((value, index) => {
      tempProducts.push(value)
    }))
    this.setState(() => ({products: tempProducts}))
  }

  addToCart = () => {
    console.log('add to cart')
  }

  render() {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          addToCart: this.addToCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer};