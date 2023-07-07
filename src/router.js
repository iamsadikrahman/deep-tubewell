import {createRouter, createWebHistory} from  'vue-router'
import HomePage from "@/components/pages/HomePage.vue";
import Halkhata from "@/components/pages/Halkhata.vue";

const routes = [
    {
        path:'/',
        component: HomePage
    }, {
        path: '/halkhata',
        component: Halkhata
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})

export default router