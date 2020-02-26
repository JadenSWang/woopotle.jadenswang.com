import React, { Component } from "react";

class MenuItem extends Component {
	state = {};

	constructor(props) {
		super(props);
		this.state = { selected: false };
	}

	handleClick(e) {
		if (!this.state.selected) {
			this.select();
			this.props.itemSelected(this.props.id, true, parseFloat(this.props.price));
		} else {
			this.deselect();
			this.props.itemSelected(this.props.id, false, -parseFloat(this.props.price));
		}
	}

	select() {
		this.setState({ selected: true });
		document.getElementById("checkmark_" + this.props.id).innerHTML = "check";
	}

	deselect() {
		this.setState({ selected: false });
		document.getElementById("checkmark_" + this.props.id).innerHTML = "add";
	}

	render() {
		return (
			<div className="col s12 m6">
				<div className="card white darken-4 ">
					<div className="card-content black-text">
						<p>
							{this.props.id + ": $" + this.props.price}
							<button
								className="btn-floating btn-small halfway-fab waves-effect waves-light red"
								onClick={this.handleClick.bind(this)}>
								<i className="material-icons" id={"checkmark_" + this.props.id}>
									add
								</i>
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuItem;
