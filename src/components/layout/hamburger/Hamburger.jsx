import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import Menu from '../menu/Menu'
import NavButton from '../../ui/NavButton/NavButton'

export default function Hamburger() {
	const [isShow, setIsShow] = useState(false)
	return (
		<div className={styles.wrapper}>
			<NavButton onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose size={24} /> : <IoMenu size={24} />}
			</NavButton>
			<Menu isShow={isShow} />
		</div>
	)
}
