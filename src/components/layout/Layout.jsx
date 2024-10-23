import cn from 'clsx'

import styles from './Layout.module.scss'
import Header from './header/Header'
import { useCheckToken } from '../../hooks/useCheckToken'

export default function Layout({
	children,
	backLink = '/profile',
	pageName,
	isHeaderVisible = true,
	isHomePage = false
}) {
	useCheckToken()
	return (
		<section
			className={cn(styles.layout, { [styles.welcomePage]: isHomePage })}
		>
			{isHeaderVisible && <Header backLink={backLink} pageName={pageName} />}

			{children && <div className={styles.content}>{children}</div>}
		</section>
	)
}
