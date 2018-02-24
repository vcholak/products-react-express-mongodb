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
        cartItems: []
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
        return (
          <div>
            <Header cartItems={this.state.cartItems}/>
            <hr/>            
            <div className="panel panel-default row">
                <Categories categories={this.state.categories} setCategory={this.setCategory}/>
                <Products products={this.state.productsOnPage} addToCart={this.addProductToCart} pages={this.state.pages} setPage={this.setPage}/>
            </div>
          </div>  
        );
    }

    componentDidMount() {
        const json = "[{\"name\":\"Kayak\",\"description\":\"A boat for one person\",\"category\":\"Watersports\",\"price\":275},{\"name\":\"Life Jacket\",\"description\":\"Protective and fashionable\",\"category\":\"Watersports\",\"price\":48.95},{\"name\":\"Soccer Ball\",\"description\":\"FIFA-approved size and weight\",\"category\":\"Soccer\",\"price\":19.5},{\"name\":\"Corner Flags\",\"description\":\"Give your playing field a professional look\",\"category\":\"Soccer\",\"price\":34.95},{\"name\":\"Stadium\",\"description\":\"Flat-packed 35,000-seat stadium\",\"category\":\"Soccer\",\"price\":795000},{\"name\":\"Thinking Cap\",\"description\":\"Improve your brain efficiency by 75%\",\"category\":\"Chess\",\"price\":16},{\"name\":\"Unsteady Chair\",\"description\":\"Secretly give your opponent a disadvantage\",\"category\":\"Chess\",\"price\":29.95},{\"name\":\"Human Chess Board\",\"description\":\"A fun game for the family\",\"category\":\"Chess\",\"price\":75},{\"name\":\"Sedona DX\",\"description\":\"A bike with an aluminum frame\",\"category\":\"Bicycle\",\"price\":419},{\"name\":\"Test\",\"description\":\"Delete me\",\"category\":\"Other\",\"price\":25}]";
        const products = JSON.parse(json);        
        const allCategories = products.map((product) => product.category);
        const categories = [...new Set(allCategories)]; // filtering unique categories
        console.log('categories:', categories);
        const pages = this.getPages(products);
        console.log('pages:', pages);
        const productsOnPage = this.getProductsOnPage(products, 1);
        console.log('productsOnPage:', productsOnPage);
        this.setState(() => ({
          allProducts: products,
          products: products,
          productsOnPage: productsOnPage,
          pages: pages,
          categories: categories
        }));        
    }

}

export default DashboardView;