import { $axios } from '../../api'

const WORKOUT = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUT)
	}

	async getById(id) {
		return $axios.get(`${WORKOUT}/${id}`)
	}

	// name, exerciseIds
	async create(body) {
		return $axios.post(WORKOUT, body)
	}

	async update(id, body) {
		return $axios.put(`${WORKOUT}/${id}`, body)
	}

	async delete(id) {
		return $axios.put(`${WORKOUT}/${id}`)
	}
}

export default new WorkoutService()
