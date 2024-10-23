import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/Header'

import styles from './Exercise.module.scss'

const HeaderExercise = ({ data, isSuccess }) => {
	console.log(data);
	return (
		<>
			<Header
				backLink={isSuccess ? `/workout/${data.workoutLogId}` : '/workouts'}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={`${import.meta.env.VITE_SERVER_URL}/${data.exercise.iconPath}`}
						height={34}
						alt='Icon for exercise'
						draggable={false}
					/>

					<h1 className={stylesLayout.heading}>{data.exercise.name}</h1>
				</div>
			)}
		</>
	)
}

export default HeaderExercise
