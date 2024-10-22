import SignIn from '../components/screens/auth/SignIn'
import SignUp from '../components/screens/auth/SignUp'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
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
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
