import React from "react"

import base from "../base";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import SampleFishes from "../sample-fishes"; 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fishes: {},
            order: {}
        };
        this.addFish = this.addFish.bind(this);
        this.updateFish = this.updateFish.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
    }
    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
        {
            context: this,
            state: 'fishes'
        });

        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
        if(localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    addFish(fish) {
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        this.setState({fishes});
    }
    updateFish(fish, key) {
        const fishes = {...this.state.fishes};
        fishes[key] = fish;
        this.setState({fishes});
    }
    loadSamples() {
        this.setState({
            fishes: SampleFishes
        })
    }
    addToOrder(key) {
        const order = {...this.state.order};
        order[key] = order[key] +1 || 1;

        this.setState({order});
    }
    render() {

        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    {
                        Object
                            .keys(this.state.fishes)
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
                    }
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} updateFish={this.updateFish} fishes={this.state.fishes}/>
            </div>
        )
    }
}

export default App;