import React from "react";

function Nav() {
	return (
		<div className="nav">
			<img className="logo" src="https://www.svgrepo.com/show/76785/warning.svg" />
			<ul>
				<a href="#">
					<li>About</li>
				</a>
				<a href="#">
					<li>Team</li>
				</a>
				<a href="#">
					<li>Contact</li>
				</a>
			</ul>
		</div>
	);
}

export default Nav;
