<template lang="">
    <div :class="`h-[100vh] ${width} bg-slate-100 flex flex-col `">
        <div class="flex flex-row hover:cursor-pointer justify-evenly items-center bg-slate-200 h-[10vh] text-[30px]">
            <div>
                <img :class="rotate" src="https://img.icons8.com/ios-filled/2x/chevron-left.png" alt="back arrow" class="hover:bg-slate-50 rounded-xl hover:cursor-pointer" @click="onToggle" width="30">
            </div>
            <h1 v-if="toggle" class="text-start w-[60%] ml-10">Menu</h1>
        </div>
        <div class="h-[70vh]" >
            <div class="flex justify-center items-center h-[80px] text-[20px] hover:bg-slate-50 hover:cursor-pointer" @click="onInfoPersonal">
                <div :class="`w-[50px] h-[50px] ${rutaActual == 'Informacion' ? 'bg-amber-600' : 'bg-gray-300' }  rounded-full flex justify-center items-center`" @click="onInfoPersonal">
                    <img width="35" src="https://img.icons8.com/external-solidglyph-m-oki-orlando/512/external-requirement-information-systems-solid-solidglyph-m-oki-orlando.png" alt="infopersonal">
                </div>
                <router-link  v-if="toggle" to="/InformacionPersonal" class="ml-10 w-[60%] text-start">Informacion Personal</router-link>
            </div>
            <hr>
            <div class="flex justify-center items-center h-[80px] text-[20px] text-center hover:bg-slate-50 hover:cursor-pointer" @click="OnFav">
                <div :class="`w-[50px] h-[50px] ${rutaActual == 'Favs' ? 'bg-amber-600' : 'bg-gray-300' }  rounded-full flex justify-center items-center`" @click="OnFav">
                    <img width="35" src="https://img.icons8.com/ios/512/like--v1.png" alt="infopersonal">
                </div>
                <router-link v-if="toggle" to="/MisFavoritos" class="ml-10 w-[60%] text-start">Mis favoritos</router-link>
            </div> 
            <hr>
        </div>
        <div v-if="toggle" class="text-center bg-slate-200 h-[12vh] flex items-center justify-center">
            <button class="w-[120px] bg-red-900 h-[50px] rounded-lg hover:bg-red-600 text-white" @click="killSesion" >Cerrar Sesion</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            toggle:true,
            rotate:"",
            width:"w-[300px]",
            rutaActual : ""
        }
    },
    methods: {
        onToggle(){
            if(this.toggle == true) {
                this.rotate = "rotate-180"
                this.toggle = false
                this.width = "w-[100px]"
            }else{
                this.rotate = "rotate-0" 
                this.toggle= true     
                this.width="w-[300px]"       
            }
        },
        OnFav(){
            this.$router.push({path:"/MisFavoritos"})
            this.rutaActual =this.$router.currentRoute._value.name
        },
        onInfoPersonal(){
            this.$router.push({path:"/InformacionPersonal"})
            this.rutaActual =this.$router.currentRoute._value.name
        },
        killSesion(){
            localStorage.clear()
            this.$router.push({path:"/Login"})
        }
    },
    created() {
        this.rutaActual =this.$router.currentRoute._value.name
    },
}
</script>
<style scoped>
    .router-link-active{
        color: rgb(214, 151, 25);
    }
</style>