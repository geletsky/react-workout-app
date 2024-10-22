import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import AuthService from '../../../services/auth.service'

export const useAuthPage = type => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) =>
			AuthService.main(type, email, password),
		onSuccess: () => {
			setIsAuth(true)
			reset()
		}
	})

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit
		}),
		[errors]
	)
}
