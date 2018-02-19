import React from 'react';

const Product = (props) => (
    <div className="well">
        <h3>
            <strong>{props.product.name}</strong>
            <span className="pull-right label label-primary">
                ${props.product.price}
            </span>
        </h3>
        <button onClick={(event) => { props.addToCart(props.product, 1);}} className="btn btn-success pull-right">
            Add to Cart
        </button>
        <span className="lead">{props.product.description}</span>
    </div>
);

export default Product; 