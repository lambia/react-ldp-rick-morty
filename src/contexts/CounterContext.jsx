import { createContext, useContext, useState } from "react";

const CounterContext = createContext({});

//Componente di Provider per wrappare in _app.js e condividere con tutti i componenti
function CounterProvider({ children }) {

	const [count, setCount] = useState(1);

	const datiDaCondividere = { count, setCount };

	return <CounterContext.Provider value={datiDaCondividere}>
		{children}
	</CounterContext.Provider>
}

//Custom Hook da importare per consumare i dati
function useCounter() {
	return useContext(CounterContext);
}

export { CounterProvider, useCounter };