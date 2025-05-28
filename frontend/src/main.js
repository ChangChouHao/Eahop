import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RegisterMember from './components/Register.vue'
import LoginMember from './components/Login.vue'
import MemberProfile from './components/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: RegisterMember },
    { path: '/login', component: LoginMember },
    { path: '/profile', component: MemberProfile },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
