import React from "react";
import PropTypes from "prop-types";
// Usar props
export const People = props => {
	return (
		<div className="container my-3">
			<div className="row bg-light">
				<div className="col-8">
					<img src="https://dummyimage.com/600X400/cccccc/fff" className="p-2" alt="" />
				</div>
				<div className="col-4">
					<h3 className="py-2">{props.name}</h3>
					<p>{props.description}</p>
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
					<p>{props.name}</p>
				</div>
				<div className="col-2">
					<h5>Birth Year</h5>
					<p>{props.birthdate}</p>
				</div>
				<div className="col-2">
					<h5>Gender</h5>
					<p>{props.gender}</p>
				</div>
				<div className="col-2">
					<h5>Height</h5>
					<p>{props.height}</p>
				</div>
				<div className="col-2">
					<h5>Skin Color</h5>
					<p>{props.skinColor}</p>
				</div>
				<div className="col-2">
					<h5>Eye Color</h5>
					<p>{props.eyeColor}</p>
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
	eyeColor: PropTypes.string
};
