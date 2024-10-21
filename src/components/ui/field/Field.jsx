import styles from './Field.module.scss'

export default function Field({ labelName, register, name, options, error, ...rest }) {
	return (
		<div className={styles.field}>
			<label htmlFor=''>{labelName}</label>
			<input {...register(name, options)} {...rest} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
