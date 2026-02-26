import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card"

const apiUrl = "https://rickandmortyapi.com/api";
const characterEndpoint = "character";

export default function CharactersList() {

	const [characters, setCharacters] = useState([]);

	function clearDati() {
		setCharacters([]);
	}

	function getDati() {
		axios.get(`${apiUrl}/${characterEndpoint}`).then(r => {

			const data = r.data; //dati del server per come li incapsula axios
			const results = data.results; //dati interni all'oggetto ottenuto

			setCharacters(results);

			console.log("Risposta", results);
		}).catch(e => {
			console.log("Errore", e.message)
		});
	}

	useEffect(getDati, []);


	return <div className="componente">
		<button onClick={clearDati}>Svuota</button>
		<button onClick={getDati}>Popola</button>
		<div className="characters-list">
			{characters.map(personaggio =>
				<Card key={personaggio.id} name={personaggio.name} image={personaggio.image} id={personaggio.id} />
			)}
		</div>
	</div>
}