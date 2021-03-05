import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import {sync} from 'vuex-router-sync'

Vue.use(VueRouter)


let routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      layout:'main'
    },
    component: Home
  },
  {
    path:'/login',
    name:"login",
    meta:{
      redirectIfAuth:true,
      layout:'auth'
    },
    component:() => import('../pages/Auth/Login.vue'),
   
  },
  {
    path:'/register',
    name:"register",
    meta:{
      redirectIfAuth:true,
      layout:'auth'
    },
    component:() => import('../pages/Auth/Register.vue'),
  },
  {
  path:'/test',
  name:"test-auth",
  component:() => import('../pages/Auth/Test.vue'),
  meta: {
    requiresAuth: true,
    layout:'main'
}
  }
]

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

sync(store, router)

router.beforeEach(async (to, from, next) => {
  if (!store.getters.authUser) {
    try {
      await store.dispatch('fetchUser')
    } catch (e) { }
    next()
  }
  if(to.matched.some(record => record.meta.requiresAuth)) {
if(store.getters.isAuth ){
  next()
}else{
  next({ name: 'login' })
}
  }else if(to.matched.some(record => record.meta.redirectIfAuth)){
    if(store.getters.isAuth){
      router.go(-1)
      return
    }
    next()
  }
  else{
    next()
  }
})


export default router
