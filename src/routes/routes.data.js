import SignIn from '../components/screens/auth/SignIn'
import SignUp from '../components/screens/auth/SignUp'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth/sign-in',
		component: SignIn,
		isAuth: false
	},
	{
		path: '/auth/sign-up',
		component: SignUp,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
