import React, { Component } from "react";
import MenuCategory from "./MenuCategory";

class AllCategories extends Component {
	state = {};

	constructor(props) {
		super(props);
		this.state.finalOrderMap = new Map();
		["filling", "rice", "beans", "topthingsoff", "options", "side"].map(itemName => {
			return this.state.finalOrderMap.set(itemName, [undefined, 0]);
		});

		this.state.orderTotal = 0;
	}

	orderUpdated = (id, selectedItemsMap, categoryTotal) => {
		let selectedItems = [...selectedItemsMap.keys()].filter(key => {
			return selectedItemsMap.get(key);
		});

		this.state.finalOrderMap.set(id, [selectedItems, categoryTotal]); // possible category total issue
		this.props.parseFinalOrder(this.state.finalOrderMap);
	};

	render() {
		return (
			<div className="container">
				<ul className="collapsible">
					<li>
						<div className="collapsible-header">About Woopotle</div>
						<div className="collapsible-body">
							<span>
								This is a NOT-FOR-PROFIT website for ordering chipotle during lunch while conforming to
								school rules. All delivery costs and fees go towards running the website and other
								payment related fees.
								<br />
								<br />
								A Wootton student will lawfully leave school during lunch and return to school with your
								order. Orders will be fulfilled on Tuesdays and Thursdays. For Example, if you made an
								order on Friday, you will recieve your order on Tuesday 25 minutes into lunch and if you
								made an order on Wednesday you can expect your order on Thursday. If you order your food
								on the same day, we will try our best but cannot guarentee we will be able to fulfill
								your order that same day.
								<br />
								<br />
								We do acccept venmo and credit cards, simply tap the pay with paypal button and follow
								the instructions
								<br />
								<br />
								NOTE: This form is for one bowl only, pay and resubmit another form to purchase multiple
								bowls
							</span>
						</div>
					</li>
				</ul>
				<ul className="collapsible">
					<MenuCategory id="type" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="filling" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="rice" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="beans" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="topthingsoff" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="options" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">
					<MenuCategory id="side" orderUpdated={this.orderUpdated} />
				</ul>
				<ul className="collapsible">{this.props.orderButton}</ul>
			</div>
		);
	}
}

export default AllCategories;
