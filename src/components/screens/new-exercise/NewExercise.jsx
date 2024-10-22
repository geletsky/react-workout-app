import cn from 'clsx'
import { Controller } from 'react-hook-form'

import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import stylesForm from './../auth/Auth.module.scss'
import styles from './NewExercise.module.scss'
import { getIconPath } from './new-exercise.util'
import { useNewExercisePage } from './useNewExercisePage'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

export default function NewExercise() {
	const { register, handleSubmit, onSubmit, errors, control } =
		useNewExercisePage()

	return (
		<Layout>
			<Heading
				heading='Create Exercise'
				subheading='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repudiandae'
				style={{ marginTop: '170px' }}
			/>

			<form onSubmit={handleSubmit(onSubmit)} className={stylesForm.form}>
				<Field
					register={register}
					options={{
						required: 'Name is required'
					}}
					error={errors?.name?.message}
					name='name'
					labelName='Name'
					type='text'
					placeholder='Enter name'
				/>

				<Field
					register={register}
					options={{
						valueAsNumber: true,
						validate: value => value > 0 || 'Times must number',
						required: 'Times is required'
					}}
					error={errors?.times?.message}
					name='times'
					labelName='Times'
					placeholder='Enter times'
				/>

				<Controller
					name='iconPath'
					control={control}
					render={({ field: { value, onChange } }) => (
						<div className={styles.images}>
							{data.map(name => (
								<img
									key={`ex img ${name}`}
									src={`${import.meta.env.VITE_SERVER_URL}/${getIconPath(name)}`}
									alt={name}
									className={cn({
										[styles.active]: value === getIconPath(name)
									})}
									onClick={() => onChange(getIconPath(name))}
									height='45'
								/>
							))}
						</div>
					)}
				/>

				<Button>Create Exercise</Button>
			</form>
		</Layout>
	)
}
