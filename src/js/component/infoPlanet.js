import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

// Initial information
let initialPlanet = {
	properties: {
		diameter: "10465",
		rotation_period: "23",
		orbital_period: "304",
		gravity: "1 standard",
		population: "200000",
		climate: "arid",
		terrain: "desert",
		surface_water: "1",
		created: "2021-03-13T19:54:30.754Z",
		edited: "2021-03-13T19:54:30.754Z",
		name: "Tatooine",
		url: "https://www.swapi.tech/api/planets/1"
	},
	description: "A planet.",
	_id: "5f7254c11b7dfa00041c6fae",
	uid: "1",
	__v: 0
};

export const InfoPlanet = props => {
	const [Planet, setPlanet] = useState(initialPlanet);

	let URL = "https://www.swapi.tech/api/";

	async function fnPlanet() {
		const response = await fetch(URL + "planets/" + props.PlanetID)
			// const response = await fetch(
			// 	"https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanetDetail.json"
			// )
			.then(res => {
				if (res.status == 200) {
					return res.json();
					//console.log(res.json());
				}
			})
			.then(response => {
				setPlanet(response.result); // updating Planet with its' setter
			})
			.catch(err => console.error(err));
	}

	// Calling last function
	useEffect(() => {
		fnPlanet();
	}, []);

	return (
		<div className="container text-font-base">
			<div className="jumbotron">
				<div className="row row-cols-2">
					<div className="col-5">
						<img src="https://picsum.photos/340/260" alt="Dummy Image" />
					</div>
					<div className="col-7">
						<h1 className="text-danger">{Planet.properties.name}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula, sagittis vestibulum fusce
							cursus velit class varius, donec a nunc accumsan aptent diam suspendisse. Fringilla quisque
							fames fusce nostra blandit commodo cras nec, aliquam ante est vivamus taciti lacinia mollis
							aliquet aptent, nunc etiam lobortis dui dictum netus feugiat. Congue cursus cum tristique
							lacinia consequat volutpat, euismod fringilla pretium hac conubia scelerisque, auctor
							interdum sociosqu mauris per.
						</p>
					</div>
				</div>
				<hr />
				<div className="row">
					<table className="table table-responsive table-borderless">
						<tbody>
							<tr className="text-danger font-weight-bold">
								<td>Name</td>
								<td className="text-center">Climate</td>
								<td className="text-center">Population</td>
								<td className="text-center">Orbital Period</td>
								<td className="text-center">Rotation Period</td>
								<td className="text-center">Diameter</td>
							</tr>
							<tr>
								<td className="text-center">{Planet.properties.name}</td>
								<td className="text-center">{Planet.properties.climate}</td>
								<td className="text-center">{Planet.properties.population}</td>
								<td className="text-center">{Planet.properties.orbital_period}</td>
								<td className="text-center">{Planet.properties.rotation_period}</td>
								<td className="text-center">{Planet.properties.diameter}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

// Props Validation
InfoPlanet.propTypes = {
	PlanetID: PropType.string
};
