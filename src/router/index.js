//路由目录
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../components/Home'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    // path: '/Home/:id',
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/Header',
    name: 'Header',
    component: Header
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
