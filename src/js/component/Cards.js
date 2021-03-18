import React, { Context, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

export const Cards = props => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState(initialPeople);

	let URL = "https://www.swapi.tech/api/";
	let detailURL = "people/details/" + props.peopleID;

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
	// UseEffect
	useEffect(() => {
		fnPeople();
	}, []);

	return (
		<div className="card my-3">
			<img className="card-img-top img-fluid" src="https://dummyimage.com/400x200/000/fff" alt="Card image cap" />
			<div className="card-body">
				<h4 className="card-title"> {people.properties.name}</h4>
				<p className="card-text text-wrap">
					Hair Color:
					{people.properties.hair_color}
				</p>
				<p className="card-text text-wrap">
					Eye Color:
					{people.properties.eye_color}
				</p>
				<div className="d-flex justify-content-between mx-1">
					<Link to="/people">
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

Cards.propTypes = {
	name: PropTypes.string,
	hair_color: PropTypes.string,
	eye: PropTypes.string,
	peopleID: PropTypes.string
};
