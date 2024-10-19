import { Link, useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	return (
		<Layout bgImage='/images/bg-image.png' isVisible={false}>
			<div className={styles.wrapper}>
				<img src="/images/logo.svg" alt="Logo" />
				<div className={styles.header}>
					<h1>Welcome To sandow.ai UI Kit!</h1>
					<p>Your personal fitness AI Assistant 🤖</p>
				</div>
				<Button onClick={() => navigate('/new-workout')}>New Workout</Button>
				<p className={styles.footer}>
					Already have account? <Link to={'/auth'}>Sign In</Link>
				</p>
			</div>
		</Layout>
	)
}

export default Home
