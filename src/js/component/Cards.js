import React from "react";
import { Link } from "react-router-dom";

export const Cards = props => {
	return (
		<div>
			<div className="card my-3">
				<img
					className="card-img-top img-fluid"
					src="https://dummyimage.com/400x200/000/fff"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text text-wrap">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<div className="d-flex justify-content-between mx-1">
						<Link to="/maininfo">
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
		</div>
	);
};
