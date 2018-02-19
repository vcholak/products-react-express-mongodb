import React from 'react';
import Cart from './cart.jsx';

const Header = (props) => (
    <div className="panel panel-default row">
        <h1 className="col-3">Sports Store</h1>
        <Cart cartItems={props.cartItems}/>        
    </div>
);

export default Header;