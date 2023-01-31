<template>
    <div>
        <Navbar></Navbar>
        <div class="flex flex-col justify-center items-center w-[100%] bg-sky-700 rounded-b-3xl shadow-xl">
            <h1 class="mb-[30px] text-[30px] sm:text-[30px] md:text-[30px] xl:text-[50px] 2xl:text-[50px] text-white">Acá está lo que buscas</h1>
            <Filtros></Filtros>
        </div>
        <div class="flex flex-col justify-center items-center w-[100%] mt-20">
            <h1 class="text-[50px]">Destacados</h1>
            <InmobiliariaCard/>
            <InmobiliariaCard/>
            <InmobiliariaCard/>
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
},

}
</script>
<style lang="">
    
</style>