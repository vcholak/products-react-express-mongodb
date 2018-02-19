import React from 'react';

class Cart extends React.Component {

  total = () => 0;

  checkout = () => {
    //
  }

  render() {
    return (      
      <div className="navbar-right">
        <div className="navbar-text">
          <b>Your cart: </b>
          {this.props.cartItems.length} item(s),
          ${ this.total() }
        </div>
        <button onClick={this.checkout()} className="btn btn-default navbar-btn">Checkout</button>
    </div>
    );    
  }  
}

export default Cart;