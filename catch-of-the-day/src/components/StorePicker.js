import React from 'react';

import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(e) {
        e.preventDefault();
        const storeId = e.target.elements.name.value;

        this.context.router.transitionTo(`/store/${storeId}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A store</h2>
                <input type="text" required placeholder="Store name" name="name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;