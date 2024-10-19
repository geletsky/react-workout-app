import { IoChevronBack } from 'react-icons/io5'

import NavButton from '../../ui/nav-button/NavButton'
import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<NavButton>
				<IoChevronBack />
			</NavButton>
			<Hamburger />
		</header>
	)
}
