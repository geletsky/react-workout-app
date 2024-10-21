import styles from './Field.module.scss'

export default function Field() {
	return (
		<div className={styles.wrapper}>
			<label htmlFor=""></label>
			<input type="text" />
		</div>
	)
}
