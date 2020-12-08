import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'
import Arm from '../views/Arm.vue'
import Skill from '../views/Skill.vue'
import Add from '../views/Add.vue'
import Upd from '../views/upd.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/hero' },
    { path: '/hero', component: Hero },
    { path: '/arm', component: Arm },
    { path: '/skill', component: Skill },
    { path: '/add', component: Add },
    { path: '/upd/:id?', component: Upd },
  ],
  linkExactActiveClass: 'active',
})

export default router
