import React, { Component } from "react";

class SelectButton extends Component {
	state = {};
	constructor(props) {
		super(props);

		this.state = this.props.order;
	}

	updateState(newState) {
		this.setState(newState);
	}

	parseList(array) {
		let toReturn = "";
		if (array === undefined) return "None Selected";
		array[0].map(item => {
			return (toReturn += item + ", ");
		});

		return toReturn;
	}

	deliveryFee() {
		return 2;
	}

	render() {
		return (
			<React.Fragment>
				<li>
					<div className="collapsible-header">Order</div>
					<div className="collapsible-body">
						<div className="col s12 m6">
							<div className="card white darken-4 ">
								<div className="card-content black-text">
									<p>{"Type: " + this.parseList(this.state.type)}</p>{" "}
									<p>{"Filling: " + this.parseList(this.state.filling)}</p>{" "}
									<p>{"Rice:    " + this.parseList(this.state.rice)}</p>
									<p>{"Beans:   " + this.parseList(this.state.beans)}</p>
									<p>{"Top Things Off:   " + this.parseList(this.state.topthingsoff)}</p>
									<p>{"Options: " + this.parseList(this.state.options)}</p>
									<p>{"Sides:   " + this.parseList(this.state.side)}</p>
									<p>
										<br />
									</p>
									<p>{"SubTotal: $" + Math.ceil(this.state.total * 100) / 100}</p>
									<p>{"Delivery: $" + this.deliveryFee()}</p>
									<p>{"Taxes:    $" + Math.ceil(this.state.total * 0.06 * 100) / 100}</p>
									<p id="totalPriceHolder">
										{"Total:    $" +
											(Math.ceil(this.state.total * (1 + 0.06 + 0.03) * 100) / 100 +
												this.deliveryFee())}
									</p>
								</div>
							</div>
						</div>
						<div className="card waves-effect white darken-4 fullwidth">
							<div className="card-content black-text">
								<div id="paypal-button-container"></div>
							</div>
						</div>
						<div id="orderdetails" style={{ visibility: "hidden" }}>
							{JSON.stringify(this.state)}
						</div>
					</div>
				</li>
			</React.Fragment>
		);
	}
}

export default SelectButton;
