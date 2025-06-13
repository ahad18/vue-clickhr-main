import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './components/LoginView.vue'
import SignupView from './components/SignupView.vue'
import LandingView from './components/LandingView.vue'
import Dashboard from './dashboard/Dashboard.vue'

const routes = [
  { path: '/', component: LandingView },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignupView },
  { path: '/dashboard', component: Dashboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
