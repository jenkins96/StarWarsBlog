import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Cards = props => {
	return (
		<div className="card my-3">
			<img className="card-img-top img-fluid" src="https://dummyimage.com/400x200/000/fff" alt="Card image cap" />
			<div className="card-body">
				<h4 className="card-title"> {props.name}</h4>
				<p className="card-text text-wrap">{props.hair_color}</p>
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
	hair_color: PropTypes.string
};
