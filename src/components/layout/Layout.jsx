import cn from 'clsx'

import styles from './Layout.module.scss'
import Header from './header/Header'

export default function Layout({
	children,
	backLink = '/',
	isHeaderVisible = true
}) {
	return (
		<section
			className={cn(styles.layout, { [styles.welcomePage]: !isHeaderVisible })}
		>
			{isHeaderVisible && <Header backLink={backLink} />}

			{children && <div className={styles.content}>{children}</div>}
		</section>
	)
}
