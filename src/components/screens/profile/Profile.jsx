import Cookies from 'js-cookie'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import { TOKEN } from '../../../app.constants'
import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import Statistics from './statistics/Statistics'

export default function Profile() {
	const { setIsAuth } = useAuth()
	
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
	}
	return (
		<Layout pageName={'Profile'}>
			<Heading
				heading='Body Analysis'
				subheading='We’ll now scan your body for better assessment result. Ensure the following:'
				style={{ marginTop: '170px' }}
			/>
			<Statistics />
			<Button onClick={logoutHandler}>Logout</Button>
		</Layout>
	)
}
