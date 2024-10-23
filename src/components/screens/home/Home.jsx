import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	return (
		<Layout isHeaderVisible={false} isHomePage={true}>
			<div className={styles.home}>
				<Heading
					heading='Welcome To Workout App!'
					subheading='Lorem ipsum dolor sit amet psum dolor sit amet consectetur!'
					logo={true}
					isWhite={true}
				/>

				<Button onClick={() => navigate('/profile')}>Go To Profile</Button>
			</div>
		</Layout>
	)
}

export default Home
