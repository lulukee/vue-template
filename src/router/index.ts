import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/main',
			name: 'main',
			component: () => import('@/views/main/Main.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/login/Login.vue'),
		},
	],
})

export default router
