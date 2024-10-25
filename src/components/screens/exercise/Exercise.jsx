import { useExerciseLog } from './hooks/useExerciseLog'

import Layout from '../../layout/Layout'

import styles from './Exercise.module.scss'
import HeaderExercise from './HeaderExercise'
import TableHeaders from './table/TableHeaders'
import TableRow from './table/TableRow'

const Exercise = () => {
	const { data, isSuccess, toggleTime, onChangeState, getState } =
		useExerciseLog()

	return (
		<Layout>
			<HeaderExercise data={data} isSuccess={isSuccess} />
			<div className={styles.wrapper}>
				<TableHeaders />

				{data?.times.map(item => (
					<TableRow
						getState={getState}
						onChangeState={onChangeState}
						toggleTime={toggleTime}
						item={item}
						key={item.id}
					/>
				))}
			</div>
		</Layout>
	)
}

export default Exercise
