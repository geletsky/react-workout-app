import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import ExerciseService from '../../../services/exercise/exercise.service'

export const useNewExercisePage = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const { mutate } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: body => ExerciseService.create(body),
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			onSubmit,
			control,
			errors
		}),
		[errors]
	)
}
