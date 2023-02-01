<template lang="">
    <Navbar></Navbar>
    <h1 class="text-[40px] text-center">Buscar</h1>
    <div class="flex flex-row">
        <div class="w-[100%] flex flex-row justify-center items-center gap-10">
            <input type="search" name="" id="" placeholder="Buscar...." class="w-[60%] h-[50px] border rounded-lg">
            <Button img="../../assets/Filtro.svg"></Button>
            <Button texto="Buscar Inmueble"></Button>
        </div>
    </div>
    <div class="flex justify-center items-center">
        <div class="w-[90%] flex flex-wrap  justify-around items-center">
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
            <InmobiliariaCard :vertical="true"/>
        </div>
    </div>
</template>
<script>
import InmobiliariaCard from '../inmobiliaria/InmobiliariaCard.vue'
import Navbar from '../Navbar.vue';
import Button from '../ui/components/Button.vue';
export default {
    components:{
        Navbar, Button, InmobiliariaCard
    }
}
</script>
<style lang="">
    
</style>