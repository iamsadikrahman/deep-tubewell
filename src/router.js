import {createRouter, createWebHistory} from  'vue-router'
import HomePage from "@/components/pages/HomePage.vue";
import Halkhata from "@/components/pages/Halkhata.vue";
import ContactUS from "@/components/pages/ContactUs.vue";

const routes = [
    {
        path:'/',
        component: HomePage
    }, {
        path: '/halkhata',
        component: Halkhata
    }, {
    path: '/contact',
        component: ContactUS
    }
]

const router = createRouter({
    history:createWebHistory(),routes
})

export default router