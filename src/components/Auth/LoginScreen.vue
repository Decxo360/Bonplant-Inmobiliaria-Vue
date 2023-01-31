<template lang="">
    <div class="flex justify-center items-center w-[100%] h-[100vh] bg-slate-100">
        <div class="flex flex-col justify-center items-center gap-5 bg-white w-[40%] shadow-lg rounded-md" >            
            <div class="flex justify-start items-start w-[100%]">
                <img src="https://img.icons8.com/ios-filled/2x/chevron-left.png" alt="back arrow" class="hover:bg-slate-50 rounded-xl hover:cursor-pointer" width="30" @click="onBack">
            </div>
            <img src="../../assets/logo.jfif" alt="bonplandlogo">
            <form action="" class="flex flex-col gap-2 w-[60%]">
                <div class="flex flex-col">
                    <label for="">correo</label>
                    <input v-model="correo" type="text" class="border rounded-md h-[50px] ">
                    <span v-if="errorMessage.correo !== null || errorMessage.correo !== ''" class="text-red-600">{{errorMessage.correo}}</span>
                </div>
                <div class="flex flex-col">
                    <label for="">contrasena</label>
                    <input v-model="contrasena" type="password" class="border rounded-md h-[50px]">
                    <span v-if="errorMessage.contrasena !== null || errorMessage.contrasena !== ''" class="text-red-600">{{errorMessage.contrasena}}</span>
                </div>
            </form>
            <button class="w-[80%] bg-indigo-700 h-[50px] text-white rounded-xl hover:bg-indigo-400" @click="LogIn">Logearse</button>
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
import { ref } from 'vue';
import axios from 'axios';
export default {
    data() {
        let errorMessage = {
            correo: null,
            contrasena: null,
        }
        return {
            correo: ref(null),
            contrasena: ref(null),
            errorMessage,
            iconos: [{
                id: 1,
                src: "https://img.icons8.com/ios/512/secured-letter--v1.png"
            },
            {
                id: 2,
                src: "https://img.icons8.com/ios/512/whatsapp.png"
            },
            {
                id: 3,
                src: "https://img.icons8.com/ios/512/windows-mobile.png"
            }
            ]
        }
    },
    methods: {
        onBack() {
            this.$router.go(-1)
        },
        async LogIn(){
            this.validarCampos()
            if (
                this.errorMessage.contrasena == "" &&
                this.errorMessage.correo == ""
            ) {                
                let response = await axios.post("http://localhost:3030/auth/logIn",{correo:this.correo,contrasena:this.contrasena}).then((res)=>{ return res.data})
                localStorage.setItem("idusuario",response.idusuario)
                localStorage.setItem("nombre",response.nombre)
                localStorage.setItem("apellido_m",response.apellido_m)
                localStorage.setItem("apellido_p",response.apellido_p)
                localStorage.setItem("telefono",response.telefono)
                localStorage.setItem("correo",response.correo)
                localStorage.setItem("tipo",response.tipo)
                localStorage.setItem("isLogged",true)
                this.$router.push({path:'/'})
            }else{
                console.log(this.errorMessage)
            }
        },
        validarCampos(){
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex.test(this.correo)) {
                this.errorMessage.correo = ""
            } else {
                this.errorMessage.correo = "Debe de ser un correo valido"
            }
            if ( this.contrasena !== " " && this.contrasena !== null) {
                this.errorMessage.contrasena = ""
            } else {
                this.errorMessage.contrasena = "Debe de ingresar una contrasena valida"
            }
        }
    },
    
}
</script>
<style lang="">
    
</style>