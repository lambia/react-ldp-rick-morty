import Link from "next/link";
import { useRouter } from "next/router";

export default function Card(props) {

	const name = props.name;
	const image = props.image;
	const id = props.id;

	const router = useRouter();
	const newUrl = `/characters/${id}`;

	return <div className="card">
		<h2 className="card-title">{name}</h2>
		<img className="card-image" src={image} />
		<Link href={`/characters/${id}`} className="nav-link">Vai ai dettagli</Link>
		<button onClick={e => router.push(newUrl)}>Vai ai dettagli</button>
	</div>
}