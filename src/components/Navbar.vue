<template lang="">
    <div class="flex flex-row h-[80px] bg-sky-700 w-[100%] justify-around items-center" >  
        <div class="w-[50%] flex flex-row justify-end items-center gap-10 text-white"> 
            <router-link to="/">Home</router-link>
            <router-link to="/detalles">Detalles</router-link>
            <router-link to="/AboutUs">Sobre nosotros</router-link>
        </div>
        <div class="flex gap-3">
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-sky-900 text-white" @click="IrLogin">Logearse</button>
            <button v-if="isLogged == false" class="w-[120px] bg-cyan-500 h-[50px] rounded-lg hover:bg-green-900 text-white">Registrarse</button>
            <button v-if="isLogged == true" class="w-[120px] bg-red-900 h-[50px] rounded-lg hover:bg-red-600 text-white">Cerrar Sesion</button>
        </div>
    </div>
</template>
<script>
export default {   
    data() {
        return {
            isLogged : false
        }
    },
    methods: {
        IrLogin(){
            this.$router.push({path:'/Login'})
        }
    },
}

</script>
<style scoped>

    .router-link-active{
        color: rgb(49, 149, 49);
        font-size: 25px;
    }


</style>