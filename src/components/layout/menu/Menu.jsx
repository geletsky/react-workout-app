import cn from 'clsx'
import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'
import { menu } from './menu.data'

export default function Menu({ isShow }) {
	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>
						<Link className={styles.link} to={item.link}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
