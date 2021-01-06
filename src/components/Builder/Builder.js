import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Moadal/Modal';
import Price from './Price/Price';

const Builder = ({ items, price, add, remove, scoops }) => (
    <div>
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <Items items={items} add={add} remove={remove} scoops={scoops} />
            <Price price={price} />
            <button type="button" className={[classes.order, classes.rounded].join(' ')}>
                Add to Cart
            </button>
        </div>
        <Modal>Modal</Modal>
    </div>
);

export default Builder;
