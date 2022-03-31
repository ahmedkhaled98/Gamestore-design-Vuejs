import { createApp } from 'vue'
import App from './App.vue'
import'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeCOMP from './components/home.vue'
import detailsComp from './components/details.vue'
import {createRouter,createWebHistory} from 'vue-router';
const routes = [
    {
        path:'/home', 
        component:homeCOMP,
        
    },
    {
        path:'/details/:id', 
        component:detailsComp,
        
    },  
   
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')

