import React from 'react';

class Cart extends React.Component {

  items = [];

  total = () => items.reduce((total, item) => total + item.count * item.price);
  
  itemCount = () => items.reduce((total, item) => total + item.count);
  
  checkout = () => {
    //
  }

  add = (id, name, price) => {
    let addedToExistingItem = false;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            items[i].count++;
            addedToExistingItem = true;
            break;
        }
    }
    if (!addedToExistingItem) {
        items.push({
            count: 1, id: id, price: price, name: name
        });
    }
  };

  remove = (id) => {
      for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
              items.splice(i, 1);
              break;
          }
      }
  };
    
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