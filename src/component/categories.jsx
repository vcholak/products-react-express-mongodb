import React from 'react';
import Category from './category.jsx';

const Categories = (props) => (
    <div className="col-3">
      <div>        
        <button className='btn btn-link' onClick={(event) => { props.setCategory(); }}>All Products</button>
      </div>  
        {
            props.categories.map((category) => (
                <Category category={category} key={category} setCategory={props.setCategory}/>
            ))
        }                    
    </div>
);

export default Categories;