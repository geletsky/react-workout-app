import SignIn from '../components/screens/auth/SignIn'
import SignUp from '../components/screens/auth/SignUp'
import Exercise from '../components/screens/exercise/Exercise'
import Home from '../components/screens/home/Home'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workout from '../components/screens/workouts/detail/Workout'
import WorkoutList from '../components/screens/workouts/list/WorkoutsList'

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
		path: '/exercise/:id',
		component: Exercise,
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
		component: WorkoutList,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
