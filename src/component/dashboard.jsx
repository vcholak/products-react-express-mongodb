import React from 'react';
import Product from './product.jsx';
import Categories from './categories.jsx';
import Products from './products.jsx';
import Header from './header.jsx';

class DashboardView extends React.Component {

    state = {
        productListActiveClass: 'btn-primary',
        pageSize: 3,
        selectedCategory: undefined,
        selectedPage: 1,
        allProducts: [],
        products: [],
        categories: []
    };

    addProductToCart = (product) => {
        //
    };

    setCategory = (category) => {
      let products;
      if(category) {
        console.log('Filtering by category:',category);
        products = this.state.allProducts.filter((product) => product.category === category);
      } else {
        products = this.state.allProducts;
      }        
      this.setState(() => ({products}));
    };

    render() {
        return (
          <div>
            <Header/>
            <hr/>            
            <div className="panel panel-default row">
                <Categories categories={this.state.categories} setCategory={this.setCategory}/>
                <Products products={this.state.products} addProductToCart={this.addProductToCart} selectedPage={this.state.selectedPage}/>
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
        this.setState(() => ({
          allProducts: products,
          products: products,
          categories: categories
        }));        
    }

}

export default DashboardView;