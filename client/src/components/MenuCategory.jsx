import React, { Component } from "react";
import MenuItem from "./MenuItem";

class MenuCategory extends Component {
	state = {};

	constructor(props) {
		super(props);
		let items = require("./menu/" + this.props.id + ".json").items;
		const selectedItemsMap = new Map();
		items.map(menuItem => {
			return selectedItemsMap.set(menuItem.id, false);
		});

		this.state = {
			items,
			selectedItemsMap,
			categoryTotal: 0
		};
	}

	itemSelected = (id, selected, price) => {
		this.state.selectedItemsMap.set(id, selected);
		let newTotal = this.state.categoryTotal + price;
		this.setState({ categoryTotal: newTotal }, () => {
			this.props.orderUpdated(this.props.id, this.state.selectedItemsMap, this.state.categoryTotal);
		}); // POSSIBLE ISSUE
	};

	render() {
		var items = this.state.items.map(item => {
			return <MenuItem id={item.id} price={item.price} itemSelected={this.itemSelected} key={item.id} />;
		});

		return (
			<React.Fragment>
				<li>
					<div className="collapsible-header">
						{this.props.id.charAt(0).toUpperCase() + this.props.id.substring(1, this.props.id.length)}
					</div>
					<div className="collapsible-body">
						<span>{items}</span>
					</div>
				</li>
			</React.Fragment>
		);
	}

	componentDidUpdate() {}
}

export default MenuCategory;
