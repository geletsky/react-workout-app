import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import WorkoutLogService from '../../../services/workout/workout-log.service'
import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

export default function Workout() {
	const { id } = useParams()

	const { data: workoutLog, isSuccess} = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})


	return (
		<Layout>
			{isSuccess && <Heading
				heading={workoutLog.workout.name}
				subheading={`Total minutes: ${workoutLog.minute} min`}
				style={{ marginTop: '170px' }}
			/>}
		</Layout>
	)
}
