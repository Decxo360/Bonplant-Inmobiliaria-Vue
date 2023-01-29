<template>
    <div>
        <Navbar></Navbar>
        <div class="flex justify-center items-center w-[100%]">
            <Filtros></Filtros>
        </div>
        <div class="flex flex-col justify-center items-center w-[100%] mt-20">
            <InmobiliariaCard/>
        </div>
    </div>
</template>
<script>
import Navbar from '../Navbar.vue'
import Filtros from './Filtros.vue'
import InmobiliariaCard from '../inmobiliaria/InmobiliariaCard.vue';

export default {
    name:"HomeScreen",
    components:{
    Navbar,
    Filtros,
    InmobiliariaCard
}
}
</script>
<style lang="">
    
</style>