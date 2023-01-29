<template lang="">
    <div class="flex flex-col w-[70%] justify-center items-center h-[300px]">
        <h1 class="mb-[30px] text-[30px]">Acá está lo que buscas</h1>
        <div class="w-[80%] flex flex-col gap-5">
          <select name="" id="" class="h-[60px] bg-slate-500 rounded-lg text-white hover:bg-slate-400 hover:cursor-pointer border border-slate-900">
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
          </select>
          <select name="" id="" class="h-[60px] bg-slate-500 rounded-lg text-white hover:bg-slate-400 hover:cursor-pointer border border-slate-900">
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Argentina">Argentina</option>
          </select>
        </div>
        <div class="flex justify-center items-center w-[80%] mt-8">
            <button class="bg-blue-700 w-[150px] h-[50px] rounded-lg text-white hover:bg-blue-500">Buscar</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>