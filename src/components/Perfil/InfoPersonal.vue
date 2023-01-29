<template lang="">
    <div class="flex flex-col w-[100%] h-[100v] gap-5 justify-center items-center">
        <div :class="`bg-slate-300 rounded-full w-[170px] h-[170px] flex justify-center items-center hover:cursor-pointer ${backdrop}`" @mouseover="Editable" @mouseout="NoEditable" @click="$refs.file.click()">
            <img v-if="edit == false" src="https://img.icons8.com/ios/512/gender-neutral-user--v1.png" alt="foto" width="140">
            <input ref="file" @change="uploadFile($event)" type="file" class="hidden"/>
            <img class="absolute" v-if="edit !== false" src="https://img.icons8.com/material-outlined/512/upload.png" width="35" alt="upload">
        </div>
        <h1 v-if="inputRef !== null">{{inputRef.name}}</h1>
            <form action="" class="flex flex-col justify-center items-center w-[80%] gap-8">
            <input v-model="usuario.nombre" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%] ">
            <div class="flex flex-row gap-1 w-[100%] justify-center items-center">    
                <input v-model="usuario.apellido_P" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
                <input v-model="usuario.apellido_M" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]" >
            </div>
            <input v-model="usuario.numero" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
            <input v-model="usuario.correo" type="text" class="border p-[15px] rounded-md h-[50px] w-[100%]">
        </form>
        <div class="flex flex-col items-center justify-end w-[80%] gap-8 mb-[50px]">
            <button class="w-[100%] bg-blue-700 hover:bg-blue-500 hover:cursor-pointer h-[50px] rounded-lg text-white" @click="">Guardar nuevos datos</button>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    data(){
        const usuario = {
            nombre: ref("Diego"),
            apellido_P: ref("Ludnstedt"),
            apellido_M: ref("Muñoz"),
            numero: ref("+56932706831"),
            correo: ref("diegolundstedt99@gmail.com"),
        }
        return {
            usuario,
            edit:false,
            inputRef:null,
            backdrop:""
        }
    },
    methods: {
        Editable(){
            this.edit = true
            this.backdrop = "backdrop-blur-md"
        },
        NoEditable(){
            this.edit = false
            this.backdrop = ""
        },
        uploadFile(event){
            this.inputRef = event.target.files[0]
            console.log(this.inputRef)
        }
    },
}
</script>
<style lang="">
    
</style>