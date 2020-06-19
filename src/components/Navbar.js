import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>Products</Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {/*<button>*/}
            {/*  <i className='fas fa-cart-plus'/>*/}
            {/*</button>*/}
            <li className="nav-item">
              <Link className="nav-link" to='/cart'>My Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
