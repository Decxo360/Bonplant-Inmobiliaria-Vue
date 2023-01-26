import { createRouter, createWebHashHistory } from 'vue-router'
import HomeSceen from '../components/Home/HomeSceen'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import Perfil from '../components/Perfil/PerfilScreen'
import DetallesScreen from '../components/Detalles/DetallesScreen'

const routes = [
    {
        path:'/Home',
        name:'Home',
        component: HomeSceen
    },
    {
        path:'/auth/Login',
        name:'Login',
        component: LoginScreen
    }
    {
        path:'/auth/Register',
        name:'Register',
        component: RegisterScreen
    }
    {
        path:'/Perfil',
        name:'Perfil',
        component:Perfil
    }
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