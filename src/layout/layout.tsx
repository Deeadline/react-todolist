import React, { Component } from "react";
import Calendar from "../components/Calendar/Calendar";
import "./layout.css";
class Layout extends Component {
	render() {
		return (
			<div className="App">
				<main>
					<Calendar />
				</main>
			</div>
		);
	}
}

export default Layout;
