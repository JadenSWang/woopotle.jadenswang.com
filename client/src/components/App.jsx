import React, { Component } from "react";
import TopNav from "./TopNav";
import AllCategories from "./AllCategories";
import OrderButton from "./OrderButton";

class App extends Component {
	state = {};
	constructor(props) {
		super(props);

		let order = {
			filling: undefined,
			beans: undefined,
			options: undefined,
			rice: undefined,
			side: undefined,
			total: "0.00"
		};

		let finalOrderMap = new Map();
		this.orderButtonElement = React.createRef();
		this.state = { finalOrderMap };
		this.orderButton = <OrderButton order={order} ref={this.orderButtonElement} />; // fix this later
	}

	parseFinalOrder = finalOrderMap => {
		const newOrder = JSON.parse(JSON.stringify(this.orderButtonElement.current.props.order));
		var newTotal = 0;

		// checking all categories
		let keysToUpdate = [...finalOrderMap.keys()].filter(item => {
			newTotal += finalOrderMap.get(item)[1];
			return finalOrderMap.get(item)[0] !== undefined;
		});

		keysToUpdate.map(item => {
			return (newOrder[item] = finalOrderMap.get(item));
		});

		newOrder.total = newTotal;
		this.orderButtonElement.current.updateState(newOrder);
	};

	render() {
		return (
			<div className="App">
				<TopNav />
				<AllCategories orderButton={this.orderButton} parseFinalOrder={this.parseFinalOrder} />
			</div>
		);
	}
}

export default App;
