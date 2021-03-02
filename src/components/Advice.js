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
		<div>
			<h2>{data}</h2>
			<button onClick={getAdviceData}>Click</button>
		</div>
	);
}

export default Advice;
