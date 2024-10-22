import { IoPodium, IoStar, IoTime } from 'react-icons/io5'
import { useProfile } from '../useProfile'

import styles from './Statistics.module.scss'

export default function Statistics() {

	const { data } = useProfile()
	const icons = [<IoPodium />, <IoStar />, <IoTime />]
	
	return (
		<div className={styles.items}>
			{data?.statistics?.map((statistic, index) => (
				<div key={statistic.label} className={styles.item}>
					<div className={styles.icon}>{icons[index]}</div>
					<div className={styles.label}>{statistic.label}</div>
					<div className={styles.value}>{statistic.value}</div>
				</div>
			))}
		</div>
	)
}
