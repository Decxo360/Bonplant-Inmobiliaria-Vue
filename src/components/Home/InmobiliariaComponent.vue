<template lang="">
    <div class="flex flex-col">
        <div class="w-[40%]">
            <div></div>
            <!---TODO SLIDER--->
        </div>
        <div class="flex flex-col w-[60%]">
            <div class="flex flex-row">
                <p class="w-[30%]"></p>
                <p class="w-[30%]"></p>
                <!--Icono-->
            </div>
            <div class="w-[100%]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum qui dolore fugiat libero reprehenderit assumenda? Magni voluptatum molestiae dicta consectetur doloremque. Modi accusamus tenetur, doloribus officia dolores numquam ex!</p>
            </div>
            <div>
                <Tag texto="Casa" img="https://iconos8.es/icon/73/casa"></Tag>
                <Tag texto="55 m2" img="https://iconos8.es/icon/20174/puerta-cerrada"></Tag>
                <Tag texto="60 m2" img=""></Tag>
                <Tag texto="2 amb" img=""></Tag>
                <Tag texto="1 baño" img=""></Tag>
                <Tag texto="Luminosidad" img=""></Tag>
            </div>
            <div>
                <Button class="w-[150px] h-[60px] text-white rounded-lg">Contactar</Button>
                <Button class="w-[150px] h-[60px] text-white rounded-lg">Contactar</Button>
                <Button class="w-[150px] h-[60px] text-white rounded-lg">Contactar</Button>
                <Button class="w-[150px] h-[60px] text-white rounded-lg">Contactar</Button>
                <!--4 Iconos -->
            </div>
        </div>
    </div>
</template>
<script>
import Tag from './Tag.vue'
export default {
    
}
</script>
<style lang="">
    
</style>