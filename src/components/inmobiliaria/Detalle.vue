<template lang="">
    <div class="flex flex-row justify-center items-center gap-3">
        <img :src="src" :alt="detalle" width="20">
        <h1 class="text-dark">{{texto}}</h1>
    </div>
</template>
<script>
export default {
    props:{
        src:{
            type:String,
            required:false
        },
        texto:{
            type:String,
            required:false
        },
        detalle:{
            type:String,
            required:false
        }
    }
}
</script>
<style lang="">
    
</style>