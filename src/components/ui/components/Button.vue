<template>
    <button :class="`transition duration-150 ease-in-out hover:scale-110 ${width !== undefined || null ? width : 'w-auto'}  pl-5 pr-5 h-[50px] bg-blue-700 flex justify-center items-center rounded-md text-white hover:bg-blue-500`">
        <h1 v-if="texto !== undefined" >{{texto}}</h1>
        <img v-if="img !== undefined" :src="img" alt="imagen" width="50">
    </button>
</template>
<script>
export default {
    props:{
        texto:{
            type:String,
        },
        img:{
            type:String
        },
        width:{
            type:String
        }
    }
}
</script>
<style lang="">
    
</style>