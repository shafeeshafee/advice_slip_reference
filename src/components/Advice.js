import React, { useState, useEffect } from "react";
import axios from "axios";

function Advice() {
	const [data, setData] = useState([]);

	const getAdviceData = async () => {
		const response = await axios.get("https://api.adviceslip.com/advice");

		setData(response.data.slip.advice);
	};

	useEffect(() => {
		getAdviceData();
	}, []);

	return (
		<div className="advice">
			<h3 className="advice-text">
				<em>{data}</em>
			</h3>
			<button className="advice-button" onClick={getAdviceData}>
				Click
			</button>
		</div>
	);
}

export default Advice;
