import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import OrderFormView from '../views/OrderFormView.vue'
import MemberView from '../views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductListView
  },
  {
    path: '/orders',
    name: 'Orders',
    component: OrderFormView
  },
  {
    path: '/member',
    name: 'Member',
    component: MemberView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
