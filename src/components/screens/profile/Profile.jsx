import Heading from '../../layout/heading/Heading'
import Layout from '../../layout/Layout'
import Statistics from './statistics/Statistics'
export default function Profile() {
	return (
		<Layout pageName={'Profile'}>
			<Heading heading='Body Analysis' subheading='We’ll now scan your body for better assessment result. Ensure the following:' style={{marginTop: '170px'}} />
			<Statistics/>
		</Layout>
	)
}
