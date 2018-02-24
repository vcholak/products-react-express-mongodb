import React from 'react';

const Category = (props) => (
    <div>    
      <button className='btn btn-link' onClick={(event) => { props.setCategory(props.category); }}>
        {props.category}
      </button>      
    </div>
);

export default Category;