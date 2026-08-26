import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			requiresAuth: true,
		}
	},
	{
		path: '/',
		name: 'Login',
		component: () => import('@/components/LoginComponent.vue'),
		meta: {
			requiresAuth: false,
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ left: 0, top: 0, behavior: 'smooth' })
			}, 100)
		})
	},
})

router.beforeEach((to, from) => {
	if (!to.meta.requiresAuth && to.name !== 'Login') {
		return { name: 'Login' }
	}
})

export default router