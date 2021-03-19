import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

// Initial information
let initialPeople = {
	properties: {
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		created: "2021 - 03 - 12T19: 25: 06.429Z",
		edited: "2021 - 03 - 12T19: 25: 06.429Z",
		name: "Luke Skywalker",
		homeworld: "https://www.swapi.tech/api/planets/1",
		url: "https://www.swapi.tech/api/people/1"
	},
	description: "A person within the Star Wars universe",
	_id: "5f63a36eee9fd7000499be42",
	uid: "1",
	__v: 0
};

export const InfoCharacter = props => {
	const [People, setPeople] = useState(initialPeople); // initial state

	let URL = "https://www.swapi.tech/api/";
	async function fnPeople() {
		const response = await fetch(URL + "people/" + props.PeopleID)
			.then(res => {
				if (res.status == 200) {
					return res.json();
					console.log(res.json());
				}
			})
			.then(response => {
				setPeople(response.result);
			})
			.catch(err => console.error(err));
		//console.log(response);
	}
	// Calling last function once
	useEffect(() => {
		fnPeople();
	}, []);

	return (
		<div className="container text-font-base">
			<div className="jumbotron">
				<div className="row row-cols-2">
					<div className="col-5">
						<img src="https://picsum.photos/340/260" alt="" />
					</div>
					<div className="col-7">
						<h1 className="text-danger">{People.properties.name}</h1>
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
				<div className="row d-flex justify-content-around text-danger">
					<div className="col-md-2">
						<h4>Name</h4>
						<p>{People.properties.name}</p>
					</div>
					<div className="col-md-2">
						<h4>Birth Year</h4>
						<p>{People.properties.birth_year}</p>
					</div>
					<div className="col-md-2">
						<h4>Gender</h4>
						<p>{People.properties.gender}</p>
					</div>
					<div className="col-md-2">
						<h4>Height</h4>
						<p>{People.properties.height}</p>
					</div>
					<div className="col-md-2">
						<h4>Skin Color</h4>
						<p>{People.properties.skin_color}</p>
					</div>
					<div className="col-md-2">
						<h4>Eye Color</h4>
						<p>{People.properties.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// Pros validation
InfoCharacter.propTypes = {
	PeopleID: PropType.string
};
