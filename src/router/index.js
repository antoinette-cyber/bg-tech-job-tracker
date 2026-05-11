import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Overview from '../views/dashboard/Overview.vue'
import Reports from '../views/dashboard/Reports.vue'
import Settings from '../views/dashboard/Settings.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/register', name: 'Registration', component: Registration },
  { path: '/login', name: 'Login', component: Login },
  // Dynamic route — any username
  { path: '/profile/:username', name: 'Profile', component: Profile },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // Nested routes
    children: [
      { path: '', redirect: { name: 'Overview' } },
      { path: 'overview', name: 'Overview', component: Overview },
      { path: 'reports', name: 'Reports', component: Reports },
      { path: 'settings', name: 'Settings', component: Settings },
    ],
  },
  // Custom 404 — catches all unmatched paths
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
