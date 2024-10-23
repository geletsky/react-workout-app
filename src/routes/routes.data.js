import SignIn from '../components/screens/auth/SignIn'
import SignUp from '../components/screens/auth/SignUp'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/workout/Workout'
import WorkoutsList from '../components/screens/workout/WorkoutsList'

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
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/workout/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: WorkoutsList,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
