<template lang="">
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-[50px]">Mis seleccionados favoritos</h1>
        <div class="w-[80%] bg-slate-900 h-[5px]"/>
    </div>
    <div class="flex justify-center items-center w-[100%]">
        <div class="flex flex-wrap justify-center gap-20 items-center w-[96%]">
            <InmobiliariaCard :vertical="true"></InmobiliariaCard>
            <InmobiliariaCard :vertical="true"></InmobiliariaCard>
            <InmobiliariaCard :vertical="true"></InmobiliariaCard>
            <InmobiliariaCard :vertical="true"></InmobiliariaCard>
            <InmobiliariaCard :vertical="true"></InmobiliariaCard>
        </div>
    </div>
</template>
<script>
import InmobiliariaCard from '../inmobiliaria/InmobiliariaCard.vue';
export default {
    components:{
        InmobiliariaCard
    }
}
</script>
<style lang="">
    
</style>