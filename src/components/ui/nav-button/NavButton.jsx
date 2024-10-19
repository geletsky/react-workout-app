import styles from './NavButton.module.scss'

export default function NavButton({ children, ...props }) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}
