import { useCounter } from "@/contexts/CounterContext"
import { useFavourites } from "@/contexts/FavouritesContext"

export default function Componente(props) {

	const { count, setCount } = useCounter();
	const { favourites } = useFavourites();

	const proprieta = props.proprieta;

	function onBtnClick() {
		setCount(count + 1);
	}

	return <div className="componente">
		<p>Questo è un componente.</p>
		<p>Dati ricevuti via props: {proprieta}</p>
		<p>Contatore: {count}</p>
		<p><button onClick={onBtnClick}>Incrementa count</button></p>
		<ul>
			{favourites.map(preferito =>
				<li>{preferito}</li>
			)}
		</ul>
	</div>
}