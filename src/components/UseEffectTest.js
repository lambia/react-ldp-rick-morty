import { useState, useEffect } from "react";

export default function Componente() {

	const [count, setCount] = useState(0);

	function incrementa() {
		setCount(count + 1);
	}

	useEffect(() => {
		console.log("useEffect di count eseguito!");
	}, [count]);

	useEffect(() => {
		console.log("useEffect di mount eseguito!");
	}, []);

	return <div className="componente">
		Conteggio: {count}
		<br />
		<button onClick={incrementa}>Cliccami!</button>
	</div>
}