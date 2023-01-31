<template lang="">
    <div class="flex flex-row h-[80px] bg-sky-700 w-[100%] justify-around items-center " >  
        <div class="flex flex-row justify-center items-center gap-3 w-[25%] sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%]">
            <img src="../assets/logoIcono.svg" alt="logoinono">
            <img src="../assets/logoTexto.svg" alt="logoinono" class="mt-5">
        </div>
        <div class="w-[50%] flex flex-row justify-center items-center gap-10 text-white text-[10px] sm:text-[25px] md:text-[10px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]"> 
            <router-link to="/">Home</router-link>
            <router-link to="/detalles">Detalles</router-link>
            <router-link to="/SobreNosotros">Sobre nosotros</router-link>
            <router-link to="/Buscar">Buscar</router-link>
            <router-link v-if="isAdministrador == 'administrador'" to="/Landing">Landing</router-link>
        </div>
        <div class="flex gap-3 justify-center items-center">
            <h1 class="text-white text-[20px]">Bienvenido {{nombre ? nombre : "Usuario"}}</h1>
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-sky-900 text-white" @click="IrLogin">Logearse</button>
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-green-900 text-white" @click="IrRegister">Registrarse</button>
            <button v-if="isLogged == true" class="w-[80px] flex items-center justify-center rounded-lg hover:bg-sky-600 text-white" @click="IrPerfil"><img src="https://img.icons8.com/ios/512/gender-neutral-user--v1.png" alt="perfil" width="50"></button>
        </div>
    </div>
</template>
<script>
export default {   
    data() {
        return {
            isLogged : JSON.parse(localStorage.getItem("isLogged")) || false,
            nombre: localStorage.getItem("nombre"),
            isAdministrador: localStorage.getItem("tipo") || "usuario"
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
        text-decoration: underline;
    }
</style>