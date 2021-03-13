import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards.js";

const CardCharactersList = () => {
	return (
		<div>
			<Cards />
		</div>
	);
};

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<div className="container testimonial-group">
				<div className="row text-center">
					<CardCharactersList />
					<CardCharactersList />
					<CardCharactersList />
					<CardCharactersList />
				</div>
			</div>
		</div>
	);
};
