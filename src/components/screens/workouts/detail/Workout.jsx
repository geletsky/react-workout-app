import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import Layout from '../../../layout/Layout'
import Heading from '../../../layout/heading/Heading'

import ExerciseItem from './ExerciseItem'
import styles from './Workout.module.scss'

export default function Workout() {
	const { id } = useParams()

	const { data: workoutLog, isSuccess } = useQuery({
		queryKey: ['get workout', id],
		queryFn: () => WorkoutLogService.getById(id),
		select: ({ data }) => data
	})

	console.log(workoutLog);

	return (
		<Layout>
			{isSuccess && (
				<Heading
					heading={workoutLog.workout.name}
					subheading={`Total minutes: ${workoutLog.minute} min`}
					style={{ marginTop: '170px' }}
				/>
			)}
			<div className={styles.wrapper}>
				{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
					<Fragment key={exerciseLog.id}>
						<ExerciseItem exerciseLog={exerciseLog} />
						{index % 2 !== 0 &&
							index !== workoutLog.exerciseLogs.length - 1 && (
								<div className='styles.line' />
							)}
					</Fragment>
				))}
			</div>
		</Layout>
	)
}
