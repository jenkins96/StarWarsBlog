import React from "react";
// Usar props
export const MainInfo = () => {
	return (
		<div className="container my-3">
			<div className="row bg-light">
				<div className="col-8">
					<img src="https://dummyimage.com/600X400/cccccc/fff" className="p-2" alt="" />
				</div>
				<div className="col-4">
					<h3 className="py-2">Luke Skywalker</h3>
					<p>
						Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola
						lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem Hola lorem
						Hola lorem Hola lorem.
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
					<p>Luke</p>
				</div>
				<div className="col-2">
					<h5>Birth Year</h5>
					<p>Luke</p>
				</div>
				<div className="col-2">
					<h5>Gender</h5>
					<p>Luke</p>
				</div>
				<div className="col-2">
					<h5>Height</h5>
					<p>Luke</p>
				</div>
				<div className="col-2">
					<h5>Skin Color</h5>
					<p>Luke</p>
				</div>
				<div className="col-2">
					<h5>Eye Color</h5>
					<p>Luke</p>
				</div>
			</div>
		</div>
	);
};
