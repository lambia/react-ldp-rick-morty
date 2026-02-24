export default function Card(props) {

	const name = props.name;
	const image = props.image;

	return <div className="card">
		<h2 className="card-title">{name}</h2>
		<img className="card-image" src={image} />
	</div>
}