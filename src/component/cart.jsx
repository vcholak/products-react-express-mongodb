import React from 'react';

class Cart extends React.Component {


  render() {
    return (
      <div className="col-8">Cart Items: {this.props.cartItems.length}</div>
    );    
  }  
}

export default Cart;