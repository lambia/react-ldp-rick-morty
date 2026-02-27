import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext({});

//Componente di Provider per wrappare in _app.js e condividere con tutti i componenti
function FavouritesProvider({ children }) {

	const [favourites, setFavourites] = useState([1, 3, 5]);

	const datiDaCondividere = { favourites, setFavourites };

	return <FavouritesContext.Provider value={datiDaCondividere}>
		{children}
	</FavouritesContext.Provider>
}

//Custom Hook da importare per consumare i dati
function useFavourites() {
	return useContext(FavouritesContext);
}

export { FavouritesProvider, useFavourites };