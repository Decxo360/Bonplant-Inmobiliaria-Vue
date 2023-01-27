<template lang="">
    <div class="flex flex-row justify-center items-center gap-3">
        <img :src="src" :alt="detalle" width="20">
        <h1 class="text-">{{texo}}</h1>
    </div>
</template>
<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        texto:{
            type:String,
            required:true
        },
        detalle:{
            type:String,
            required:true
        }
    }
}
</script>
<style lang="">
    
</style>