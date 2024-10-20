import cn from 'clsx'

import styles from './Layout.module.scss'
import Header from './header/Header'

export default function Layout({
	children,
	bgImage,
	backLink = '/',
	isHeaderVisible = true
}) {
	return (
		<section
			className={cn(styles.wrapper, { [styles.welcomePage]: !isHeaderVisible })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			{isHeaderVisible && <Header backLink={backLink} />}

			{children}
		</section>
	)
}
