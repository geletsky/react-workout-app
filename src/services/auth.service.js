import Cookies from 'js-cookie'

import { $axios } from '../api'
import { TOKEN } from '../app.constants'

class AuthService {
	async main(type, email, password) {
		try {
			console.log(type, email, password)
			const { data } = await $axios.post(`/auth/${type}`, { email, password })

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
