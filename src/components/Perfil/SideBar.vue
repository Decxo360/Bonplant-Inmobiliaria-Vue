<template lang="">
    <div :class="`h-[91.6vh] ${width} bg-slate-100 flex flex-col`">
        <div class="flex flex-row hover:cursor-pointer justify-around items-center bg-slate-200 h-[10vh] text-[30px]">
            <img :class="rotate" src="https://img.icons8.com/ios-filled/2x/chevron-left.png" alt="back arrow" class="hover:bg-slate-50 rounded-xl hover:cursor-pointer" @click="onToggle" width="30">
            <h1 v-if="toggle">Menu</h1>
        </div>
        <div class="h-[70vh]" v-if="toggle">
            <div class="flex justify-start items-center h-[80px] text-[20px] hover:bg-slate-50 hover:cursor-pointer">
                <h1 class="ml-10">Informacion Personal</h1>
            </div>
            <hr>
            <div class="flex justify-start items-center h-[80px] text-[20px] text-center hover:bg-slate-50 hover:cursor-pointer">
                <h1 class="ml-10">Mis inmuebles favoritos</h1>
            </div> 
            <hr>
        </div>
        <div v-if="toggle" class="text-center bg-slate-200 h-[12vh] flex items-center justify-center">
            <button class="w-[120px] bg-red-900 h-[50px] rounded-lg hover:bg-red-600 text-white" >Cerrar Sesion</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            toggle:true,
            rotate:"",
            width:"w-[300px]"
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
        }
    },
}
</script>
<style lang="">
    
</style>