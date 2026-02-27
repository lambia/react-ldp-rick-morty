import Link from "next/link";
import { useRouter } from "next/router";
import { useFavourites } from "@/contexts/FavouritesContext";

export default function Card(props) {

	const name = props.name;
	const image = props.image;
	const id = props.id;

	const { favourites, setFavourites } = useFavourites();

	const router = useRouter();
	const newUrl = `/characters/${id}`;

	const isLiked = favourites.includes(id);

	function addFavourites() {
		const nuovoArray = [
			...favourites,
			id
		];
		setFavourites(nuovoArray);
	}

	function remFavourites() {

		const nuovoArray = favourites.filter(preferitoID => preferitoID != id)

		setFavourites(nuovoArray);
	}

	function toggleFavourite() {
		if (isLiked) {
			remFavourites();
		} else {
			addFavourites();
		}
	}

	function getLikeUI() {

		if (isLiked) {
			return <span onClick={toggleFavourite}>❤️</span>
		}

		return <span onClick={toggleFavourite}>➕</span>
	}

	return <div className="card">
		<h2 className="card-title">{name}{getLikeUI()}</h2>
		<img className="card-image" src={image} />
		<Link href={`/characters/${id}`} className="nav-link">Vai ai dettagli</Link>
		<button onClick={e => router.push(newUrl)}>Vai ai dettagli</button>
	</div>
}