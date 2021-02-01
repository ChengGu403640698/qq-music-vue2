import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../src/App.vue'
import MainPage from '../src/components/mainpage.vue'
import Singer from '../src/components/singer.vue'
import Ranking from '../src/components/ranking.vue'
import NewDisk from '../src/components/newdisk.vue'
import Categories from '../src/components/categories.vue'
Vue.use(VueRouter)
const routes = [{
    path:'/',
    redirect:'/mainpage',
    component:App,
},,{
    path:'/mainpage',
    component:MainPage,
},{
    path:'/singer',
    component:Singer,
},{
    path:'/ranking',
    component:Ranking,
},{
    path:'/newdisk',
    component:NewDisk,
},{
    path:'/categories',
    component:Categories,
}];
export default new VueRouter({
    mode:'hash',
    routes
})