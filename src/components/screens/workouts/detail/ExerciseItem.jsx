import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './Workout.module.scss'

export default function ExerciseItem({ exerciseLog }) {
	const navigate = useNavigate()
	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigate(`/exercise/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={
						import.meta.env.VITE_SERVER_URL +
						'/' +
						exerciseLog.exercise.iconPath
					}
					height={34}
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}
