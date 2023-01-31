<template lang="">
    <div :class="`bg-cover flex flex-col w-[100%] justify-center items-center ${src}  border rounded-xl hover:cursor-pointer ${isVisible == true ? 'w-[100%]': 'w-[70%]'}`">
            <div v-if="isVisible == true" :class="`flex flex-col w-[100%] items-center justify-center gap-5 `">
              <select name="" id="" class="w-[80%] h-[50px] rounded-xl border mt-5" >
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
              </select>
              <select name="" id="" class="w-[80%] h-[50px] rounded-xl border mt-5">
                <option value="Casa">Ubicacion</option>
                <option value="Departamento">Departamento</option>
              </select>
              <!-- <select name="" id="" class="w-[80%] h-[50px] rounded-xl border mt-5" >
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
              </select> -->
              <button class="w-[100px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[200px] h-[50px] bg-blue-600 rounded-xl text-white border mb-1">Buscar</button>
            </div>
            <h1 class="text-white text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[100px] 2xl:text-[100px] tracking-[15px] ">{{texto}}</h1>
    </div>
</template>
<script>
export default {
    props:{
        src:{
            type:String,
            required: true
        },
        texto:{
            type:String,
            required:true
        },
        rotate:{
            type:Boolean,
            required:true
        },
        isVisible:{
            type:Boolean,
            required:true
        },
    }
}
</script>
<style lang="">
    
</style>