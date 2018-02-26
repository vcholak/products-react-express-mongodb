import React from 'react';
import Product from './product.jsx';
import Categories from './categories.jsx';
import Products from './products.jsx';
import Header from './header.jsx';

class DashboardView extends React.Component {

    state = {      
      productListActiveClass: 'btn-primary',
      pageSize: 3,                
      allProducts: [],
      products: [], // products filtered by category
      productsOnPage: [], // products filtered by category per page        
      categories: [],
      currentCategory: undefined,
      pages: 0,
      currentPage: undefined,
      cartItems: [],
      isLoading: false,
      error: null
    };

    addProductToCart = (product, count) => {
      const item = { product: product, count: count};
      this.setState((prevState) => ({cartItems: prevState.cartItems.concat(item)}));
    };

    setCategory = (category) => {
      let products;
      if(category) {
        console.log('Filtering by category:',category);
        products = this.state.allProducts.filter((product) => product.category === category);
      } else {
        products = this.state.allProducts;
      }
      const pages = this.getPages(products);
      console.log('pages:', pages);
      const productsOnPage = this.getProductsOnPage(products, 1);
      console.log('productsOnPage:', productsOnPage);
      this.setState(() => ({currentCategory: category, products: products, pages: pages, productsOnPage: productsOnPage}));
    };

    getPages = (products) => Math.floor(products.length / this.state.pageSize) + ((products.length % this.state.pageSize) === 0 ? 0 : 1);

    getProductsOnPage = (products, page) => {      
      const offset = (page - 1) * this.state.pageSize;
      console.log('offset:', offset);
      const last = offset + this.state.pageSize + 1; // not included
      console.log('last:', last); 
      return products.slice(offset, last);
    }; 

    setPage = (page) => {      
      const productsOnPage = this.state.currentCategory ? this.getProductsOnPage(this.state.products, page) : this.getProductsOnPage(this.state.allProducts, page);
      console.log('productsOnPage:', productsOnPage);
      this.setState(() => ({currentPage: page, productsOnPage: productsOnPage}));
    }

    render() {
      const { cartItems, categories, productsOnPage, pages, isLoading, error } = this.state;
      if (isLoading) {
        return (
          <div>
            <h1 style={{textAlign: 'center'}}>Loading products...</h1>
          </div>
        ); 
      }
      if (error) {
        const errorMsg = `Error: ${error.statusCode} ${error.statusText}`;
        return (
          <div>
            <h1 style={{textAlign: 'center'}}>{errorMsg}</h1>
          </div>  
        );
      }
      return (
        <div>
          <Header cartItems={cartItems}/>
          <hr/>            
          <div className="panel panel-default row">            
            <Categories categories={categories} setCategory={this.setCategory}/>
            <Products products={productsOnPage} addToCart={this.addProductToCart} pages={pages} setPage={this.setPage}/>
          </div>
        </div>  
      );
    }

    componentDidMount() {
      this.setState(() => ({isLoading: true}));
      fetch('/api/products')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {          
          const error = {
            statusCode: response.status,
            statusText: response.statusText
          };
          this.setState(() => ({error: error, isLoading: false}));
          throw new Error('Error while fetching products');
        }
      }) 
      .then(products => {        
        console.log('products:', products);
        const allCategories = products.map((product) => product.category);
        const categories = [...new Set(allCategories)]; // filtering unique categories
        console.log('categories:', categories);
        const pages = this.getPages(products);
        console.log('pages:', pages);
        const productsOnPage = this.getProductsOnPage(products, 1);
        console.log('productsOnPage:', productsOnPage);
        this.setState(() => ({
          isLoading: false,
          allProducts: products,
          products: products,
          productsOnPage: productsOnPage,
          pages: pages,
          categories: categories
        }));
      })
      .catch(error => {
        console.log(error);
      }); 
    }
    
}

export default DashboardView;