import React from 'react';
import Product from './product.jsx';

class Products extends React.Component {

  render() {
    const pages = [];
    for(let page=1; page<=this.props.pages; page++) {
      pages.push(page);
    }
    console.log('pages:', pages);

    return (
      <div className="col-8">
        {
            this.props.products.map((product, index) => (
                <Product
                    key={index}
                    product={product}
                    addToCart={this.props.addToCart}
                />
            ))
        }                    
        <div className="pull-right btn-group">
          <span>Page: </span>
          {
            pages.map((page) => (          
              <button key={page} className='btn btn-link' onClick={(event) => { this.props.setPage(page); }}>{page}</button>
            ))
          }
        </div>        
      </div>
    );
  }  
}

export default Products;