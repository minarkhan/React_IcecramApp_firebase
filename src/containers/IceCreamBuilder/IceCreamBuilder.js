import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        fetch('https://reacticecream-default-rtdb.firebaseio.com/items.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    items: responseData,
                });
            });
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => ({
            scoops: workingScoops,
            totalPrice: prevState.totalPrice + items[scoop],
        }));
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        // const scoopIndex = workingScoops.findIndex((sc) => sc === scoop).push(scoop);
        workingScoops.splice(scoop, 1);

        this.setState((prevState) => ({
            scoops: workingScoops,
            totalPrice: prevState.totalPrice - items[scoop],
        }));
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={[classes.container, 'container'].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}
