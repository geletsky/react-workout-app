import cn from 'clsx'
import styles from './Menu.module.scss'
import { menu } from './menu.data'

export default function Menu({ isShow }) {
	const handleLogout = () => {}
	
	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
