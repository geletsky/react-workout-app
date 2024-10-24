import Header from '../../layout/header/Header'

import styles from './Exercise.module.scss'

const HeaderExercise = ({ data, isSuccess }) => {
	return (
		<>
			<Header
				backLink={isSuccess ? `/workout/${data.workoutLogId}` : '/workouts'}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<h1>{data.exercise.name}</h1>
					<img
						src={`${import.meta.env.VITE_SERVER_URL}/${data.exercise.iconPath}`}
						height={34}
						alt='Icon for exercise'
						draggable={false}
					/>
				</div>
			)}
		</>
	)
}

export default HeaderExercise
