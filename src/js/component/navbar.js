import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 px-3">
					<img src="https://img.icons8.com/color/48/000000/star-wars.png" alt="" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown px-5">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenu1"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Notifications <span className="badge badge-light">0</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<a className="dropdown-item" href="#!">
							Action
						</a>
						<a className="dropdown-item" href="#!">
							Another action
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
