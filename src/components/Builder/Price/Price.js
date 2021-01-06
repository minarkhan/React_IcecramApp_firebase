import React from 'react';
import classes from './Price.module.css';

const Price = ({ price = 0 }) => (
    <div className={classes.total}>
        <div>Total Price</div>
        <div>{price.toFixed(2)} TK</div>
    </div>
);

export default Price;
