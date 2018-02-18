import React from 'react';
import Cart from './cart.jsx';

const Header = () => (
    <div className="panel panel-default row">
        <h1 className="col-3">Sports Store</h1>
        <Cart/>        
    </div>
);

export default Header;