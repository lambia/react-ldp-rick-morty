import dati from "@/data/users";

const { users, posts } = dati;

function getUser(id) {

	return new Promise((resolve, reject) => {

		console.log(`Avvio chiamata simulata per utente id ${id}`);

		setTimeout(() => {

			// const esito = (Math.random() < 0.5);
			const esito = false;

			if (esito) {
				const user = users.find(utente => utente.id == id)
				if (user) {
					resolve(user);
				} else {
					reject(new Error(`User not found per user id: ${id}`));
				}
			} else {
				reject(new Error(`Random API error per user id: ${id}`));
			}

		}, 1000);

	})

}

function getPost(id) {

	return new Promise((resolve, reject) => {

		console.log(`Avvio chiamata simulata per post id ${id}`);

		setTimeout(() => {

			// const esito = (Math.random() < 0.5);
			const esito = true;

			if (esito) {
				const post = posts.find(post => post.id == id)
				if (post) {
					resolve(post);
				} else {
					reject(new Error(`User not found per post id: ${id}`));
				}
			} else {
				reject(new Error(`Random API error per post id: ${id}`));
			}

		}, 1000);

	})

}


export { getUser, getPost }