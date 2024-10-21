import { Link, useNavigate } from 'react-router-dom'

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
					heading='Welcome To sandow.ai UI Kit!'
					subheading='Your personal fitness AI Assistant 🤖'
					logo={true}
					isWhite={true}
				/>

				<Button onClick={() => navigate('/new-workout')}>Sign Up</Button>

				<p className={styles.footer}>
					Already have account? <Link to={'/auth'}>Sign In</Link>
				</p>
			</div>
		</Layout>
	)
}

export default Home
