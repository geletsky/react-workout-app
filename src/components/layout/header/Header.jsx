import { IoChevronBack } from 'react-icons/io5'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/Hamburger'
import NavButton from '../../ui/NavButton/NavButton'

export default function Header() {
	return (
		<header className={styles.header}>
			<NavButton>
				<IoChevronBack size={24} />
			</NavButton>
			<Hamburger />
		</header>
	)
}
