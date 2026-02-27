import "@/styles/globals.css";

import { CounterProvider } from "@/contexts/CounterContext";
import { FavouritesProvider } from "@/contexts/FavouritesContext";

export default function App({ Component, pageProps }) {
	return <FavouritesProvider>
		<CounterProvider>
			<Component {...pageProps} />
		</CounterProvider>
	</FavouritesProvider>;
}
