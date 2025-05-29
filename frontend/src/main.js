import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import RegisterMember from './components/Register.vue'
import LoginMember from './components/Login.vue'
import MemberProfile from './components/Profile.vue'
import MemberView from './views/MemberView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: RegisterMember },
    { path: '/login', component: LoginMember },
    { path: '/profile', component: MemberProfile },
    { path: '/member', component: MemberView },
  ]
})

library.add(faUser)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
