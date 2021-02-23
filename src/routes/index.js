import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/Form';

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === 'production'
    ? '/test-for-maximum-education/'
    : '/'
  ),
  routes: [
    {
      path: '/',
      component: Form
    },
    {
      path: '/success',
      component: () => import('../components/Success')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ]
});

export default router;
