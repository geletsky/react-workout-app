import { Link } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

export default function SignIn() {
	const { errors, handleSubmit, onSubmit, register } = useAuthPage('login')

	return (
		<Layout isHeaderVisible={false}>
			<Heading
				heading='Sign In'
				subheading='Lorem ipsum dolor sit amet psum dolor sit amet consectetur!'
				logo={true}
			/>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					register={register}
					options={{
						required: 'Email is required'
					}}
					error={errors?.email?.message}
					name='email'
					labelName='Email Address'
					type='text'
					placeholder='Enter email'
				/>

				<Field
					register={register}
					options={{
						required: 'Password is required'
					}}
					error={errors?.password?.message}
					name='password'
					labelName='Password'
					type='password'
					placeholder='Enter password'
				/>

				<Button>Sign In</Button>
			</form>
			<p className={styles.footer}>
				Don’t have an account? <Link to={'/auth/sign-up'}>Sign Up</Link>
			</p>
		</Layout>
	)
}
