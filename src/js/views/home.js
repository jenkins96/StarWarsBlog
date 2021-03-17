import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Cards } from "../component/Cards.js";
import { CardPlanet } from "../component/CardPlanet.js";

const CardCharactersList = () => {
	return (
		<div className="col-4">
			<Cards />
		</div>
	);
};
const CardPlanetList = () => {
	return (
		<div className="col-4">
			<CardPlanet />
		</div>
	);
};

export const Home = () => {
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(true);

	const urlPeople = "https://swapi.dev/api/people/?format=json";
	const urlPlanets = "https://swapi.dev/api/planets/?format=json";

	useEffect(() => {
		async function fetchPeople() {
			let res = await fetch(urlPeople);
			let data = await res.json();
			setPeople(data.results);
		}

		async function fetchPlanets() {
			let res = await fetch(urlPlanets);
			let data = await res.json();
			setPlanets(data.results);
		}

		fetchPeople();
		fetchPlanets();
	}, []);

	return (
		<div>
			<div className="text-center mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						<CardCharactersList />
						<CardCharactersList />
						<CardCharactersList />
						<CardCharactersList />
						<CardCharactersList />
					</div>
				</div>
			</div>

			<div className="text-center mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						<CardPlanetList />
						<CardPlanetList />
						<CardPlanetList />
						<CardPlanetList />
						<CardPlanetList />
					</div>
				</div>
			</div>
		</div>
	);
};
