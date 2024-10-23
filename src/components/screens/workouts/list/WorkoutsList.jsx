import Layout from '../../../layout/Layout'
import Heading from '../../../layout/heading/Heading'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

export default function WorkoutList() {
	const { data, isSuccess, mutate } = useWorkouts()
	return (
		<Layout>
			<Heading
				heading='Workouts'
				subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus suscipit cupiditate animi quibusdam.'
				style={{ marginTop: '170px' }}
			/>
			{isSuccess && (
				<div className={styles.wrapper}>
					{data.map(workout => (
						<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
					))}
				</div>
			)}
			{isSuccess && data?.length === 0 && <div>Not Found</div>}
		</Layout>
	)
}
