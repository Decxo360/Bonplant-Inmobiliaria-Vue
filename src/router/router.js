import { createRouter, createWebHashHistory } from 'vue-router'
import HomeScreen from '../components/Home/HomeScreen.vue'
import LoginScreen from '../components/auth/LoginScreen.vue'
import RegisterScreen from '../components/auth/RegisterScreen.vue'
import Perfil from '../components/Perfil/PerfilScreen.vue'
import InfoPersonal from '../components/Perfil/InfoPersonal.vue'
import Favoritos from '../components/Perfil/Favoritos.vue'
import DetallesScreen from '../components/Detalles/DetallesScreen.vue'
import BuscarScreen from '../components/Buscar/BuscarScreen.vue'
import NosotrosScreen from '../components/SobreNosotros/NosotrosScreen.vue'
import LandingScreen from '../components/Landing/LandingScreen.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: HomeScreen
    },
    {
        path:'/Login',
        name:'Login',
        beforeEnter: (to, from, next) => {
            let isLogged = JSON.parse(localStorage.getItem("isLogged"))
            if( isLogged==true){
                next({path:'/InformacionPersonal'})
            }else{
                next()
            }
        },
        component: LoginScreen
    },
    {
        path:'/Register',
        beforeEnter: (to, from, next) => {
            let isLogged = JSON.parse(localStorage.getItem("isLogged"))
            if(isLogged==true){
                next({path:'/InformacionPersonal'})
            }else{
                next()
            }
        },
        name:'Register',
        component: RegisterScreen
    },
    {
        path:'/Perfil',
        name:'Perfil',
        component:Perfil,
        beforeEnter: (to, from, next) => {
            let isLogged = JSON.parse(localStorage.getItem("isLogged"))
            if(isLogged !== false || isLogged !== undefined || isLogged==true){
                next()
            }else{
                next({path:'/Login'})
            }
        },
        children:[
            {
                path:"/InformacionPersonal",
                beforeEnter: (to, from, next) => {
                    let isLogged = JSON.parse(localStorage.getItem("isLogged"))
                    if(isLogged !== false && isLogged !== undefined && isLogged==true){
                        next()
                    }else{
                        next({path:'/Login'})
                    }
                  },
                component: InfoPersonal,
                name:"Informacion"
            },
            {
                path:"/MisFavoritos",
                component:Favoritos,
                beforeEnter: (to, from, next) => {
                    let isLogged = JSON.parse(localStorage.getItem("isLogged"))
                    if(isLogged !== false || isLogged !== undefined || isLogged==true){
                        next()
                    }else{
                        next({path:'/Login'})
                    }
                  },
                name:"Favs"
            }
        ]
    },
    {
        path:'/Detalles',
        name:'Detalles',
        component:DetallesScreen
    },
    {
        path:'/Buscar',
        name:'Buscar',
        component:BuscarScreen
    },
    {
        path:'/SobreNosotros',
        name:'AboutUs',
        component:NosotrosScreen
    },
    {
        path:'/Landing',
        name:'Landing',
        component:LandingScreen
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router