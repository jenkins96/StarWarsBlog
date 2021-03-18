import React, { Component, useEffect, useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

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
// Modificar props
export const CardPlanet = props => {
	const { store, actions } = useCallback(Context);
	const [planet, setPlanet] = useEffect(initialPlanet);

	let URL = "https://www.swapi.tech/api/";
	let detailURL = "planets/details/" + props.planetID;

	async function fnPlanet() {
		const response = await fetch(URL + "planets/" + props.planetID)
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
				setPlanet(response.result);
			})
			.catch(err => console.error(err));
	}
	// UseEffect
	useEffect(() => {
		fnPlanet();
	}, []);
	return (
		<div className="card my-3">
			<img className="card-img-top img-fluid" src="https://dummyimage.com/400x200/000/fff" alt="Card image cap" />
			<div className="card-body">
				<h4 className="card-title"> {planet.properties.name}</h4>
				<p className="card-text text-wrap">
					Climate:
					{planet.properties.climate}
				</p>
				<p className="card-text text-wrap">
					Terrain:
					{planet.properties.terrain}
				</p>
				<p className="card-text text-wrap">
					Population:
					{planet.properties.population}
				</p>
				<div className="d-flex justify-content-between mx-1">
					<Link to={detailURL}>
						<button type="button" className="btn btn-outline-info">
							Learn more!
						</button>
					</Link>
					<button type="button" className="btn btn-outline-warning">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	planetID: PropType.string
};
