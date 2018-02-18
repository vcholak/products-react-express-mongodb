import React from 'react';

const Category = (props) => (
    <div>    
      <button onClick={(event) => { props.setCategory(props.category); }}>
        {props.category}
      </button>      
    </div>
);

export default Category;