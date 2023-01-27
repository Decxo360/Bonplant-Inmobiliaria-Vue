import { createRouter, createWebHashHistory } from 'vue-router'
import HomeScreen from '../components/Home/HomeScreen.vue'
import LoginScreen from '../components/auth/LoginScreen.vue'
import RegisterScreen from '../components/auth/RegisterScreen.vue'
import Perfil from '../components/Perfil/PerfilScreen.vue'
import DetallesScreen from '../components/Detalles/DetallesScreen.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: HomeScreen
    },
    {
        path:'/Login',
        name:'Login',
        component: LoginScreen
    },
    {
        path:'/Register',
        name:'Register',
        component: RegisterScreen
    },
    {
        path:'/Perfil',
        name:'Perfil',
        component:Perfil
    },
    {
        path:'/Detalles',
        name:'Detalles',
        component:DetallesScreen
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router