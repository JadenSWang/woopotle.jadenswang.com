import React, { Component } from "react";

class TopNav extends Component {
	state = {};
	render() {
		return (
			<nav>
				<div className="nav-wrapper blue darken-4">
					<a href="!#" className="brand-logo center">
						Woopotle
					</a>
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						{/* <li>
							<a href="pickup.html">Pickup</a>
						</li>
						<li>
							<a href="badges.html">Components</a>
						</li>
						<li>
							<a href="collapsible.html">JavaScript</a>
						</li> */}
					</ul>
				</div>
			</nav>
		);
	}
}

export default TopNav;
