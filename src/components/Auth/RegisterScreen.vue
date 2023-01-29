<template lang="">
    <div class="flex flex-col w-[100%] h-[100vh] bg-slate-100 gap-5 justify-center items-center">
        <div class="flex flex-col w-[40%] justify-center items-center bg-white gap-5" >
            <div class="flex justify-start items-center">
                <img src="https://img.icons8.com/ios-filled/2x/chevron-left.png" alt="back arrow" class="hover:bg-slate-50 rounded-xl hover:cursor-pointer" width="30" @click="onBack">
            </div>
            <img src="../../assets/logo.jfif" alt="" width="300"/>
            <h1 class="">Formulario para registrarse</h1>
            <form action="" class="flex flex-col justify-center items-center w-[80%]">
            <label for="">Nombre</label>
            <input v-model="usuario.nombre" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <label for="">Apellidos</label>
            <div class="flex flex-row gap-1 w-[100%] justify-center items-center">    
                <input v-model="usuario.apellido_P" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
                <input v-model="usuario.apellido_M" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
            </div>
            <label for="">Numero telefonico</label>
            <div class="flex flex-row gap-1 w-[100%]">    
                <select name="" id="" class="border p-[15px] rounded-md h-[50px] w-[30%]" v-model="usuario.codigo">
                    <option value="+59">+56</option>
                    <option value="+56">+56</option>
                    <option value="+56">+56</option>
                    <option value="+56">+56</option>
                </select>
                <input v-model="usuario.numero" type="text" class="border p-[15px] rounded-md h-[50px] w-[70%]">
            </div>
            <label for="" >correo</label>
            <input v-model="usuario.correo" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <label for="">contrasena</label>
            <input v-model="usuario.contrasena" type="password" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <label for="">repita contrasena</label>
            <input v-model="contrasena2" type="password" class="border p-[15px] rounded-md h-[50px] w-[100%]">
        </form>
        <div class="flex flex-col items-center justify-end w-[80%] gap-8 mb-[50px]">
            <button class="w-[100%] bg-blue-700 hover:bg-blue-500 hover:cursor-pointer h-[50px] rounded-lg text-white" @click="IniciarSesion">Registrarme</button>
            <router-link to="/Login" class=" hover:text-amber-600">¿Ya tienes una cuenta? haz click aqui para ir a logearte</router-link>
        </div>
        </div> 
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    data() {
        const usuario = {
            nombre: ref(null),
            apellido_P: ref(null),
            apellido_M: ref(null),
            codigo: ref(),
            numero: ref(null),
            correo: ref(null),
            contrasena: ref(null)
        }
        const contrasena2 = ref(null)
        return {
            usuario,
            contrasena2
        }
    },
    methods: {
        onBack(){
            
            this.$router.go(-1)
        },
        validarCampos(){
            if (this.usuario.contrasena !== this.contrasena2) {
                console.log("es falso")
            }
            console.log("es true")
        },
        IniciarSesion(){
            console.log("click");
            this.validarCampos()
        }   
    },
}
</script>
<style lang="">
    
</style>