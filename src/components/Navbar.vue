<template lang="">
    <div class="flex flex-row h-[80px] bg-sky-700 w-[100%] justify-around items-center" >  
        <div class="w-[50%] flex flex-row justify-end items-center gap-10 text-white"> 
            <router-link to="/">Home</router-link>
            <router-link to="/detalles">Detalles</router-link>
            <router-link to="/SobreNosotros">Sobre nosotros</router-link>
            <router-link to="/Buscar">Buscar</router-link>
        </div>
        <div class="flex gap-3 justify-center items-center">
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-sky-900 text-white" @click="IrLogin">Logearse</button>
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-green-900 text-white" @click="IrRegister">Registrarse</button>
            <button v-if="isLogged == true" class="w-[80px] flex items-center justify-center rounded-lg hover:bg-sky-600 text-white" @click="IrPerfil"><img src="https://img.icons8.com/ios/512/gender-neutral-user--v1.png" alt="perfil" width="50"></button>
            <h1 class="">Bienvenido {{nombre ? nombre : "Usuario"}}</h1>
        </div>
    </div>
</template>
<script>
export default {   
    data() {
        return {
            isLogged : JSON.parse(localStorage.getItem("isLogged")) || false,
            nombre: localStorage.getItem("nombre")
        }
    },
    methods: {
        IrLogin(){
            this.$router.push({path:'/Login'})
        },
        IrRegister(){
            this.$router.push({path:"/Register"})
        },
        IrPerfil(){
            this.$router.push({path:"/InformacionPersonal"})
        }
    },
    created() {
        console.log('router')
    },
}

</script>
<style scoped>
    .router-link-active{
        color: rgb(214, 151, 25);
    }
</style>