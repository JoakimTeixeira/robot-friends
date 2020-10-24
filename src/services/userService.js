export const getUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users').then(
		(response) => {
			if (response.status >= 200 && response.status <= 299) {
				return response.json()
			} else {
				throw Error(response.statusText)
			}
		}
	)
}
