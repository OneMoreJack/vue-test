
import Layout from '@/layout/index.vue'

export const menuRoutes = [
  {
    name: 'index',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'testRouter',
        path: '/test-router',
        label: '尝试$router',
        component: () => import('@/views/test-router/index.vue')
      }
    ]
  },
  
]

export default [...menuRoutes]
