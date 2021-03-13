import React from "react";

export const Cards = props => {
	return (
		<div className="container">
			<div className="card">
				<img className="card-img-top" src="https://dummyimage.com/400x200/000/fff" alt="Card image cap" />
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text text-wrap">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
