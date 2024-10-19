import { IoChevronBack, IoPerson } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

import NavButton from '../../ui/nav-button/NavButton'
import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

export default function Header({ backLink = '' }) {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			{pathname !== '/' && (
				<NavButton
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoChevronBack />
				</NavButton>
			)}
			<Hamburger />
		</header>
	)
}
