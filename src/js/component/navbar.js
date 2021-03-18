import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenu } from "./dropdownMenu.js"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 px-3">
					<img src="https://img.icons8.com/color/48/000000/star-wars.png" alt="" />
				</span>
			</Link>
            <DropdownMenu />

		</nav>
	);
};
