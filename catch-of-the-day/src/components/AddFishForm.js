import React from 'react';

class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }
    createFish(e) {
        e.preventDefault();
        const fish = {
            name: e.target.elements.name.value,
            price: e.target.elements.price.value,
            status: e.target.elements.status.value,
            desc: e.target.elements.desc.value,
            image: e.target.elements.image.value,
        }
        this.props.addFish(fish);
        e.target.reset();
    }
    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" placeholder="Fish Name"/>
                <input type="text" name="price" placeholder="Fish Price"/>
                <select name="status">
                    <option value="avalible">Fresh!</option>
                    <option value="unavalible">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" placeholder="Fish Desc"></textarea>
                <input type="text" name="image" placeholder="Fish Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm