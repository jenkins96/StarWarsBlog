import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { InfoCharacter } from "../component/infoCharacter.js";
import { InfoPlanet } from "../component/infoPlanet.js";

export const Single = props => {
	const params = useParams();

	if (params.type === "people") {
		return (
			<div>
				<InfoCharacter PeopleID={params.theid} />
			</div>
		);
	} else {
		return (
			<div>
				<InfoPlanet PlanetID={params.theid} />
			</div>
		);
	}
};

Single.propTypes = {
	match: PropTypes.object
};