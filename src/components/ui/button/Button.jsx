import cn from 'clsx'

import styles from './Button.module.scss'

export default function Button({ children, ...props }) {
	return (
		<button className={cn(styles.button)} {...props}>
			{children}
		</button>
	)
}
