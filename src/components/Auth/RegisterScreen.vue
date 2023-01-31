<template lang="">
    <div class="flex flex-col w-[100%] h-[100vh] bg-slate-100 gap-5 justify-center items-center">
        <div class="flex flex-col w-[40%] justify-center items-center bg-white gap-5" >
            <div class="flex justify-start items-start w-[100%]">
                <img src="https://img.icons8.com/ios-filled/2x/chevron-left.png" alt="back arrow" class="hover:bg-slate-50 rounded-xl hover:cursor-pointer" width="30" @click="onBack">
            </div>
            <img src="../../assets/logo.jfif" alt="" width="300"/>
            <h1 class="">Formulario para registrarse</h1>
            <form action="" class="flex flex-col justify-center items-center w-[80%]">
            <label for="">Nombre</label>
            <input v-model="usuario.nombre" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <span v-if="errorMessage.nombre !== null || errorMessage.nombre !== ''" class="text-red-600">{{errorMessage.nombre}}</span>
            <label for="">Apellidos</label>
            <div class="flex flex-row gap-1 w-[100%] justify-center items-center"> 
                <div class="w-[50%] flex flex-col">
                    <input v-model="usuario.apellido_P" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
                    <span v-if="errorMessage.apellido_p !== null || errorMessage.apellido_p !== ''" class="text-red-600">{{errorMessage.apellido_p}}</span>
                </div>
                <div class="w-[50%] flex flex-col">
                    <input v-model="usuario.apellido_M" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
                    <span v-if="errorMessage.apellido_p !== null || errorMessage.apellido_p !== ''" class="text-red-600">{{errorMessage.apellido_m}}</span>
                </div>
            </div>
            <label for="">Numero telefonico</label>
            <div class="flex flex-row gap-1 w-[100%]">   
                <div class="w-[30%]">
                    <select name="" id="" class="border p-[15px] rounded-md h-[50px] w-[100%]" v-model="usuario.codigo">
                        <option value="+59">+56</option>
                        <option value="+56">+56</option>
                        <option value="+56">+56</option>
                        <option value="+56">+56</option>
                    </select>
                    <span v-if="errorMessage.codigo !== null || errorMessage.codigo !== ''" class="text-red-600">{{errorMessage.codigo}}</span>
                </div> 
                <div class="w-[70%]">
                    <input v-model="usuario.numero" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
                    <span v-if="errorMessage.numero !== null || errorMessage.numero !== ''" class="text-red-600">{{errorMessage.numero}}</span>
                </div>
            </div>
            <label for="" >correo</label>
            <input v-model="usuario.correo" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <span v-if="errorMessage.correo !== null || errorMessage.correo !== ''" class="text-red-600">{{errorMessage.correo}}</span>
            <label for="">contraseña</label>
            <input v-model="usuario.contrasena" type="password" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <span v-if="errorMessage.contrasena !== null || errorMessage.contrasena !== ''" class="text-red-600">{{errorMessage.contrasena}}</span>
            <label for="">repita contraseña</label>
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
import axios from 'axios'

export default {
    data() {
        let errorMessage = {
            nombre: null,
            apellido_m: null,
            apellido_p: null,
            codigo: null,
            numero: null,
            correo: null,
            contrasena: null,
        }

        const usuario = {
            nombre: ref(null),
            apellido_P: ref(null),
            apellido_M: ref(null),
            codigo: ref(null),
            numero: ref(null),
            correo: ref(null),
            contrasena: ref(null)
        }
        const contrasena2 = ref(null)
        return {
            usuario,
            contrasena2,
            errorMessage
        }
    },
    methods: {
        onBack() {

            this.$router.go(-1)
        },
        validarCampos() {
            let isValid = false
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.usuario.nombre !== " " && this.usuario.nombre !== null) {
                this.errorMessage.nombre = ""
                isValid = true
            } else {
                this.errorMessage.nombre = "Este campo no puede estar vacio"
                isValid = false
            }
            if (this.usuario.apellido_M !== " " && this.usuario.apellido_M !== null) {
                this.errorMessage.apellido_m = ""
            } else {
                this.errorMessage.apellido_m = "Este campo no puede estar vacio"
                isValid = false
            }
            if (this.usuario.apellido_P !== " " && this.usuario.apellido_P !== null) {
                this.errorMessage.apellido_p = ""
                isValid = true
            } else {
                this.errorMessage.apellido_p = "Este campo no puede estar vacio"
                isValid = false
            }
            if (this.usuario.codigo !== null) {
                this.errorMessage.codigo = ""
                isValid = true
            } else {
                this.errorMessage.codigo = "Debe de seleccionar un campo"
                isValid = false
            }
            if (this.usuario.numero !== ' ' && this.usuario.numero !== null) {
                this.errorMessage.numero = ""
                isValid = true
                if (this.usuario.numero.length == 8) {
                    this.errorMessage.numero = ""
                    isValid = true

                } else {
                    this.errorMessage.numero = "Este campo solo permite 8 valores de largo"
                    isValid = false
                }
            } else {
                this.errorMessage.numero = "Este campo no puede estar vacio"
                isValid = false
            }
            if (this.usuario.correo !== ' ' && this.usuario.correo !== null) {
                this.errorMessage.correo = ""
                isValid = true
            } else {
                this.errorMessage.correo = "Este campo no puede estar vacio"
                isValid = false
            }
            if (regex.test(this.usuario.correo)) {
                this.errorMessage.correo = ""
                isValid = true
            } else {
                this.errorMessage.correo = "Debe de ser un correo valido"
                isValid = false
            }
            if (this.usuario.contrasena == this.contrasena2 && this.usuario.contrasena !== " " && this.usuario.contrasena !== null && this.usuario.contrasena.length >= 8) {
                this.errorMessage.contrasena = ""
                isValid = true
            } else {
                this.errorMessage.contrasena = "Debe de ingresar una contrasena valida"
                isValid = false
            }
            console.log(this.errorMessage);
        },
        async IniciarSesion() {
            console.log(this.usuario);
            this.validarCampos()
            if (
                this.errorMessage.nombre == "" &&
                this.errorMessage.apellido_m == "" &&
                this.errorMessage.apellido_p == "" &&
                this.errorMessage.codigo == "" &&
                this.errorMessage.contrasena == "" &&
                this.errorMessage.numero == "" &&
                this.errorMessage.correo == ""
            ) {
                let response = await axios.post("http://localhost:3030/usuario/guardar", {
                    nombre: this.usuario.nombre,
                    apellido_p: this.usuario.apellido_P,
                    apellido_m: this.usuario.apellido_P,
                    correo: this.usuario.correo,
                    telefono: `${this.usuario.codigo} ${this.usuario.telefono}`,
                    contrasena: this.usuario.contrasena
                }).then((res) => { res.data })
                if (response.idusuario !== null || reesponse.idusuario !== undefined) {
                    localStorage.setItem("idusuario", response.idusuario)
                    localStorage.setItem("nombre", response.nombre)
                    localStorage.setItem("apellido_m", response.apellido_m)
                    localStorage.setItem("apellido_p", response.apellido_p)
                    localStorage.setItem("telefono", response.telefono)
                    localStorage.setItem("correo", response.correo)
                    localStorage.setItem("tipo", response.tipo)
                    localStorage.setItem("isLogged", true)
                    this.$router.push({ path: '/' })
                }
            } else {
                console.log(this.errorMessage)
            }
        }
    }
}
</script>
<style lang="">
    
</style>