import React from 'react';

import AddFishForm from "./AddFishForm"

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, key) {
        //Video way
        // var fish = this.props.fishes[key];
        // fish = {...fish, [e.target.name]: e.target.value};
        // this.props.updateFish(fish, key);
        //My way
        var fish = this.props.fishes[e.target.parentElement.dataset.key];
        fish = {...fish, [e.target.name]: e.target.value};
        this.props.updateFish(fish, e.target.parentElement.dataset.key);

    }
    renderInventory(key) {
        const fish = this.props.fishes[key];
        return (
            <div className="fish-edit" key={key} data-key={key}>
                <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e,key) => {this.handleChange(e,key)}} />
                <input type="text" name="price" value={fish.price} placeholder="Fish Price" onChange={(e,key) => {this.handleChange(e,key)}}/>
                <select name="status" value={fish.status} onChange={(e,key) => {this.handleChange(e,key)}}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e,key) => {this.handleChange(e,key)}}></textarea>
                <input type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(e,key) => {this.handleChange(e,key)}}/>
                <button onClick={(e) => {this.props.removeFish(key)}}>Remove</button>
            </div>
        )
    }
    render() {
        return(
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory