import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

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

// Usar props
export const People = props => {
	const [people, setPeople] = useState(initialPeople);

	let URL = "https://www.swapi.tech/api/";
	async function fnPeople() {
		const response = await fetch(URL + "people/" + props.peopleID)
			// const response = await fetch(
			// 	"https://raw.githubusercontent.com/johmstone/files/main/JSONResultPeopleDetail.json"
			// )
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

	useEffect(() => {
		fnPeople();
	}, []);

	return (
		<div className="container my-3">
			<div className="row bg-light">
				<div className="col-8">
					<img src="https://dummyimage.com/600X400/cccccc/fff" className="p-2" alt="" />
				</div>
				<div className="col-4">
					<h3 className="py-2">{people.properties.name}</h3>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
						of type and scrambled it to make a type specimen book.
					</p>
				</div>
			</div>
			<div className="row bg-light">
				<div className="col-12">
					<hr className="bg-danger" />
				</div>
			</div>
			<div className="row bg-light text-danger">
				<div className="col-2">
					<h5>Name</h5>
					<p>{people.properties.name}</p>
				</div>
				<div className="col-2">
					<h5>Birth Year</h5>
					<p>{people.properties.birthdate}</p>
				</div>
				<div className="col-2">
					<h5>Gender</h5>
					<p>{people.properties.gender}</p>
				</div>
				<div className="col-2">
					<h5>Height</h5>
					<p>{people.properties.height}</p>
				</div>
				<div className="col-2">
					<h5>Skin Color</h5>
					<p>{people.properties.skinColor}</p>
				</div>
				<div className="col-2">
					<h5>Eye Color</h5>
					<p>{people.properties.eyeColor}</p>
				</div>
			</div>
		</div>
	);
};
People.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	birthdate: PropTypes.instanceOf(Date),
	gender: PropTypes.string,
	skinColor: PropTypes.string,
	height: PropTypes.number,
	eyeColor: PropTypes.string,
	peopleID: PropType.string
};
