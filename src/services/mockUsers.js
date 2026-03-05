import users from "@/data/users";

export function getUser(id) {

	return new Promise((resolve, reject) => {

		console.log(`Avvio chiamata simulata per id ${id}`);

		setTimeout(() => {

			// const esito = (Math.random() < 0.5);
			const esito = true;

			if (esito) {
				const user = users.find(utente => utente.id == id)
				if (user) {
					resolve(user);
				} else {
					reject(new Error(`User not found per id: ${id}`));
				}
			} else {
				reject(new Error(`Random API error per id: ${id}`));
			}

		}, 2000);

	})

}