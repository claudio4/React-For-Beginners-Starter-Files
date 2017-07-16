import React from 'react';

import {formatPrice} from "../helpers";

class Fish extends React.Component {
    constructor() {
        super();
        this.addToOrder = this.addToOrder.bind(this);
    }
    addToOrder(e) {
        e.preventDefault();
        this.props.addToOrder(this.props.index);
    }
    render() {
        const {details} = this.props;
        const isAvalibe = details.status === 'available';
        const btnText = isAvalibe ? "Add to order" : "Sold out"
        return(
            <li className="menu-fish">
                <img src={details.image} alt={details.name}/>
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick={this.addToOrder}>{btnText}</button>
            </li>
        )
    }
}

export default Fish;