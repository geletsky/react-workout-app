import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import styles from './Auth.module.scss'

export default function SignIn() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) =>
			AuthService.main('login', email, password),
		onSuccess: () => {
			alert('good')
		}
	})

	const onSubmit = (data) => {
		mutate(data)
		reset()
	}

	return (
		<Layout isHeaderVisible={false}>
			<Heading
				heading='Sign In To Sandow'
				subheading='Let’s personalize your fitness with AI'
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
				Don’t have an account? <Link to={'/auth'}>Sign Up</Link>
			</p>
		</Layout>
	)
}
