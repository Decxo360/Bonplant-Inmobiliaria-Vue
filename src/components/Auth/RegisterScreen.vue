<template lang="">
    <div class="flex flex-col w-[100%] h-[100vh] bg-slate-100 gap-5 justify-center items-center">
        <div class="flex flex-col w-[40%] justify-center items-center bg-white gap-5" >
            <img src="../../assets/logo.jfif" alt="" width="300"/>
            <h1 class="">Formulario para registrarse</h1>
            <form action="" class="flex flex-col justify-center items-center w-[80%]">
            <label for="">Nombre</label>
            <input type="text" class="border rounded-md h-[50px] w-[100%]">
            <label for="">Apellidos</label>
            <div class="flex flex-row gap-1 w-[100%] justify-center items-center">    
                <input type="text" class="border rounded-md h-[50px] w-[100%]" >
                <input type="text" class="border rounded-md h-[50px] w-[100%]" >
            </div>
            <label for="">Numero telefonico</label>
            <div class="flex flex-row gap-1 w-[100%]">    
                <select name="" id="" class="border rounded-md h-[50px] w-[30%]">
                    <option value="" >+56</option>
                    <option value="">+56</option>
                    <option value="">+56</option>
                    <option value="">+56</option>
                </select>
                <input type="text" class="border rounded-md h-[50px] w-[70%]">
            </div>
            <label for="" >correo</label>
            <input type="text" class="border rounded-md h-[50px] w-[100%]">
            <label for="">contrasena</label>
            <input type="text" class="border rounded-md h-[50px] w-[100%]">
            <label for="">repita contrasena</label>
            <input type="text" class="border rounded-md h-[50px] w-[100%]">
        </form>
        <div class="flex flex-col items-center justify-end w-[80%] gap-8 mb-[50px]">
            <button class="w-[100%] bg-blue-700 hover:bg-blue-500 hover:cursor-pointer h-[50px] rounded-lg text-white">Registrarme</button>
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
            numero: ref(null),
            correo: ref(null),
            contrasena: ref(null)
        }
        return {
            usuario
        }
    },
}
</script>
<style lang="">
    
</style>