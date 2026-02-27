import { createContext, useContext, useState } from "react";

const ContestoContext = createContext(null);

function ContestoProvider({ children }) {

	const defaultDato = {
		key: "value"
	};

	const [dato, setDato] = useState(defaultDato);

	function faiCose() {
		console.log("Faccio cose, vedo gente");
	}

	const datiDaCondividere = { dato, setDato, faiCose };

	return <ContestoContext.Provider value={datiDaCondividere}>
		{children}
	</ContestoContext.Provider>
}

function useContesto() {
	return useContext(ContestoContext);
}

export { ContestoProvider, useContesto };

/*************************************************/
/**************** ESEMPI DI UTILIZZO *************/
/*************************************************/

//Providing in App:
/*
import { ContestoProvider } from "./contexts/ContestoContext";
function App() {
	return <ContestoProvider>
		...componenti/rotte...
	</ContestoProvider>
*/

// Utilizzo da componente:
/*
import { useContesto } from "../contexts/ContestoContext";
function Componente() {
	const { dato, setDato } = useContesto();
	return <div>Dati ottenuti: {dato.key}</div>
}
*/