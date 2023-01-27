<template lang="">
    <div>
        <Navbar></Navbar>
        <div class="flex justify-center items-center w-[100%]">
            <Filtros></Filtros>
        </div>
    </div>
</template>
<script>
import Navbar from '../Navbar.vue'
import Filtros from './Filtros.vue'
export default {
    name:"HomeScreen",
    components:{
        Navbar,
        Filtros
    }
}
</script>
<style lang="">
    
</style>