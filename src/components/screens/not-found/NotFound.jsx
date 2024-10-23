import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

export default function NotFound() {
	const { isAuth } = useAuth()
	const navigate  = useNavigate()
	const { pathname } = useLocation()

	useEffect(() => {
		if (!isAuth || pathname !== '/auth/sign-up') {
			navigate('/auth/sign-in')
		}
	}, [])

	return <Layout>NotFound</Layout>
}
