import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

export default function NotFound() {
	const { isAuth } = useAuth()

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate('/auth/sign-in')
	}, [])

	return <Layout>NotFound</Layout>
}
