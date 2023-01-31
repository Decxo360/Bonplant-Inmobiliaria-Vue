<template>
    <div class="w-[80%] shadow-2xl mb-[20px] rounded-xl flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row mt-[50px]">
        <div class="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[64%] ">
            <img src="../../assets/foto1.jpeg" alt="casa" class="w-[100%] rounded-md relative">
            <span class="absolute w-[100px] text-center text-white bg-blue-700 mt-[-150px] sm:mt-[-220px] md:mt-[-235px] lg:mt-[-235px] xl:mt-[-200px] 2xl:mt-[-235px] ml-3 rounded-md">Compra</span>
        </div>
        <div class="w-[95%] flex flex-col ml-[20px] mb-5 gap-5">
            <HeaderCard/>
            <Descripcion/>
            <div class="flex flex-wrap  w-[100%] gap-10 justify-center items-center">
                <Detalle :src="icono" :texto="altura"/>
                <Detalle :src="icono" :texto="altura"/>
                <Detalle :src="icono" :texto="altura"/>
                <Detalle :src="icono" :texto="altura"/>

            </div>
            <FooterCard/>
            <!-- <DetalleComponent /> -->
        </div>
    </div>
</template>

<script>
import Descripcion from "./Descripcion.vue";
import Detalle from "./Detalle.vue";
import FooterCard from "./FooterCard.vue";
import HeaderCard from "./HeaderCard.vue";
export default {
    components: { Descripcion, HeaderCard, Detalle, FooterCard },
    data() {
        return {
            imagenes:[
                "../../assets/foto1.jpeg",
                "../../assets/foto2.jpeg",
                "../../assets/foto3.jpeg",
            ],
            icono:"https://img.icons8.com/ios/512/resize-vertical.png",
            altura: "60mt"
        }
    },
}
</script>
<style>
    
</style>