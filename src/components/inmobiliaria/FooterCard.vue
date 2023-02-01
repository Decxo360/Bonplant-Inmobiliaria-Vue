<template lang="">
    <div class="flex flex-row w-[100%] justify-end items-center gap-5">
        <img width="30" src="https://img.icons8.com/ios-filled/512/phone.png" alt="telefono">
        <img width="30" src="https://img.icons8.com/ios/512/whatsapp.png" alt="wsp">
        <Button texto="Contactar"></Button>
        <button class="bg-cyan-500 rounded-3xl w-[50px] flex justify-center items-center h-[50px] mr-3">
            <img width="30" src="https://img.icons8.com/ios/512/like.png" alt="corazon">
        </button>
    </div>
</template>
<script>
import Button from '../ui/components/Button.vue';
export default {
    components:{
        Button
    },
    props:{
        idinmueble:{
            type:Number,
            required:false
        }
    }
}
</script>
<style lang="">
    
</style>