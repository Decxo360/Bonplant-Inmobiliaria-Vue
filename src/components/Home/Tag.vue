<template lang="">
    <div>
        <img :src="img" alt="">
        <p>{{texto}}</p>
    </div>
</template>
<script>
export default {
    props:{
        texto: String,
        img:String
    }
}
</script>
<style lang="">
    
</style>