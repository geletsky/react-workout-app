import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import Layout from '../../layout/Layout'
import Heading from '../../layout/heading/Heading'

import stylesForm from './../auth/Auth.module.scss'
import { useNewWorkout } from './useNewWorkout'
import SelectExercises from './SelectExercises'

export default function NewWorkout() {
	const { register, handleSubmit, onSubmit, errors, control } = useNewWorkout()

	return (
		<Layout>
			<Heading
				heading='Create Workout'
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

				<SelectExercises control={control} />

				<Button>Create Workout</Button>
			</form>
		</Layout>
	)
}
