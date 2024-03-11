import Users from "@/views/system/Users.vue";
import Profile from "@/views/system/Profile.vue";

export default [
	{
		path: '/usuarios',
		name: 'users',
		component: Users,
	},
	{
		path: '/perfil',
		name: 'profile',
		component: Profile,
	},
]