import React from 'react';

class Cart extends React.Component {

  items = this.props.cartItems;

  total = () => this.items.reduce((total, item) => total + item.count * item.price, 0);
  
  itemCount = () => this.items.reduce((total, item) => total + item.count, 0);
  
  checkout = () => {
    //TODO
  };

  add = (id, name, price) => {
    let itemInd = this.items.findIndex( el => el.id === id);      
    if(itemInd) {
      this.items[itemInd].count++;
    } else {
      this.items.push({
          count: 1, id: id, price: price, name: name
      });
    }
  };

  remove = (id) => {
    let itemInd = this.items.findIndex( el => el.id === id);
    if(itemInd) {
      this.items.splice(itemInd, 1);
    }    
  };
    
  render() {
    return (      
      <div className="navbar-right">
        <div className="navbar-text">
          <b>Your cart: </b>
          {this.itemCount()} item(s),
          ${ this.total() }
        </div>
        <button onClick={this.checkout()} className="btn btn-default navbar-btn">Checkout</button>
    </div>
    );    
  }  
}

export default Cart;