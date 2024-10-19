import { IoClose, IoMenu } from 'react-icons/io5'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import NavButton from '../../ui/nav-button/NavButton'
import Menu from '../menu/Menu'

import styles from './Hamburger.module.scss'

export default function Hamburger() {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<NavButton onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <IoMenu />}
			</NavButton>
			<Menu isShow={isShow} />
		</div>
	)
}
