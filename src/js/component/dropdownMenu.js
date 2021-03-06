import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DropdownMenu = props => {
	const { store, actions } = useContext(Context);

	const Counter = () => {
		let y = 0;
		store.people.forEach(element => {
			if (element.favorite) {
				y++;
			}
		});
		store.planets.forEach(element => {
			if (element.favorite) {
				y++;
			}
		});

		return <span className="mr-1 p-1 bg-light text-body rounded">{y}</span>;
	};
	return (
		<div className="ml-auto">
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<Counter /> Favorites
					<i className="fas fa-heart px-2" />
				</button>
				<div
					className="dropdown-menu dropdown-menu-right"
					aria-labelledby="dropdownMenuButton"
					style={{ width: "max-content" }}>
					{store.people.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2" key={"people" + i}>
									<Link to={"/people/details/" + item.uid} replace>
										<a className="dropdown-item pl-2">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2 ml-auto mr-0"
										onClick={() => actions.changeFavoritePeople(item.uid)}
										style={{ cursor: "pointer" }}
									/>
								</div>
							);
						}
					})}
					{store.planets.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2" key={"planet" + i}>
									<Link to={"/planets/details/" + item.uid} replace>
										<a className="dropdown-item pl-2">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2  ml-auto mr-0"
										onClick={() => actions.changeFavoritePlanet(item.uid)}
										style={{ cursor: "pointer" }}
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};
