import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import { TOKEN } from '../../../app.constants'

import styles from './Menu.module.scss'
import { menu } from './menu.data'

export default function Menu({ isShow, setIsShow }) {
	const { setIsAuth } = useAuth()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={index}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
