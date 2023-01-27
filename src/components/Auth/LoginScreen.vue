<template lang="">
    <div class="flex flex-col justify-center items-center w-[100%] h-[100vh] bg-slate-100">
        <div class="flex flex-col justify-center items-center gap-5 bg-white w-[40%] shadow-lg rounded-md" >            
          <img src="../../assets/logo.jfif" alt="bonplandlogo">
            <form action="" class="flex flex-col gap-2 w-[60%]">
                <label for="">correo</label>
                <input v-model="correo" type="text" class="border rounded-md h-[50px] ">
                <label for="">pass</label>
                <input v-model="contrasena" type="password" class="border rounded-md h-[50px]">
            </form>
            <button class="w-[80%] bg-indigo-700 h-[50px] text-white rounded-xl hover:bg-indigo-400" @click="Login()">Logearse</button>
            <div class="flex flex-col justify-end items-end w-[80%] ">
                <router-link to="/Register" class="hover:text-amber-700">¿No tienes una cuenta?, Haz click aquí para crear una </router-link>
            </div>
            <div class="w-[100%] flex flex-col justify-center items-center gap-5">
                <h1 class="text-[30px]">Ayuda</h1>
                <div  class="flex flex-row gap-4 justify-center items-center mb-[50px]">
                    <img v-for="icono of iconos" :src="icono.src" :alt="icono.id" width="35" class="hover:bg-slate-600 hover:cursor-pointer hover:rounded-3xl w-[60px] h-[60px]">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {ref} from 'vue';
export default {
    data() {
        return {
            correo: ref(null),
            contrasena:ref(null),
            iconos:[{
                id:1,
                src:"https://img.icons8.com/ios/512/secured-letter--v1.png"
            },
            {
                id:2,
                src:"https://img.icons8.com/ios/512/whatsapp.png"
            },
            {
                id:3,
                src:"https://img.icons8.com/ios/512/windows-mobile.png"
            }
        ]
        }
    },
    methods: { 
        Login(){
            console.log(this.correo,this.contrasena)
        }
    },
}
</script>
<style lang="">
    
</style>