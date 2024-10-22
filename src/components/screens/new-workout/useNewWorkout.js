import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import WorkoutService from '../../../services/workout/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const { mutate } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: body => WorkoutService.create(body),
		onSuccess: () => {
			reset({
				name: '',
				exerciseIds: ''
			})
		}
	})

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
		alert('good')
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			onSubmit,
			errors,
			control
		}),
		[errors]
	)
}
