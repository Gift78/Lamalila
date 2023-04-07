import { createRouter, createWebHistory } from 'vue-router'
import CurrencyView from '../views/CurrencyView.vue'
import NotFound from '../views/NotFoundView.vue'
import CurrencyManagement from '../src/companents/CurrencyManagement'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/currencies'
    },
    {
      path: '/currencies',
      name: 'CurrencyView',
      component: CurrencyView
    },
    {
      path: '/currencies/:id',
      name: 'currencies',
      component: CurrencyManagement
    },
    {
      path: '/:catchNotMathPath(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ],

  linkExactActiveClass: 'text-blue-500',
  linkActiveClass: 'text-green-500'
})
export default router
// https://router.vuejs.org/api/interfaces/RouterOptions.html#Properties-linkActiveClass
