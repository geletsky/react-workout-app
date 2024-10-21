import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import styles from './Auth.module.scss'

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({mode: 'onChange'})

	const onSubmit = data => console.log(data)
	return (
		<Layout isHeaderVisible={false}>
			<Heading
				heading='Sign Up For Free'
				subheading='Quickly make your account in 1 minute'
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
					type='text'
					placeholder='Enter password'
				/>

				<Button>Sign Up</Button>
			</form>
			<p className={styles.footer}>
				Already have an account? <Link to={'/auth'}>Sign In</Link>
			</p>
		</Layout>
	)
}
