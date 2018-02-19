import React from 'react';
import Cart from './cart.jsx';

const Header = (props) => (
    <div className="panel panel-default row">
        <h1 className="col-3">Sports Store</h1>
        <div className="col-8">
          <Cart cartItems={props.cartItems}/>
        </div>
    </div>
);

export default Header;