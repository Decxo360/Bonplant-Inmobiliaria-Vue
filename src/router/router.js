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
        component:Perfil,
        children:[
            {
                path:"/InformacionPersonal",
                component: InfoPersonal,
                name:"Informacion"
            },
            {
                path:"/MisFavoritos",
                component:Favoritos,
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
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router