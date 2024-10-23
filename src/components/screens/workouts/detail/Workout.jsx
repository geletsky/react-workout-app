import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '../../../ui/button/Button'

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

	const navigate = useNavigate()

	const { mutate } = useMutation({
		mutationKey: ['complete workout'],
		mutationFn: () => WorkoutLogService.complete(id),
		onSuccess() {
			navigate('/workouts')
		}
	})

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
			<Button onClick={() => mutate()}>Complete Workout</Button>
		</Layout>
	)
}
