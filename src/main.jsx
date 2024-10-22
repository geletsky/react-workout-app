import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider.jsx'
import Router from './routes/Router.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>
)

// TODO! 
// Сделать уведомления
// Добавить ссылку на создание упражнения
