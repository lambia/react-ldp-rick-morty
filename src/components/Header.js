import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {

	console.log(useRouter());

	const { pathname } = useRouter();
	console.log(pathname);

	function isActive(rotta) {
		let classi = "nav-link";

		if (rotta != "/" && pathname.startsWith(rotta)) {
			classi += " active";
		} else if (rotta == pathname) {
			classi += " active";
		}

		return classi;
	}

	return <nav>
		<Link href="/" className={isActive("/")}>Home</Link>
		<Link href="/characters" className={isActive("/characters")}>Personaggi</Link>
	</nav>
}