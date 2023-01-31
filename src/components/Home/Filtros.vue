<template lang="">
    <div class="flex flex-col w-[100%] items-center h-[60%] mb-10">
        <section class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-around items-center gap-20 w-[70%]">
          <div :class="`${rotate == true ? 'rotate-90' : ''} w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%]`">
            <Item :rotate="rotate" :isVisible="!visible" src="bg-[url(https://th.bing.com/th/id/R.08bdc7b22add66488eba8715d5f1c8f3?rik=nywZg5yr9ubw4w&pid=ImgRaw&r=0)]" texto="Alquiler"></Item>
          </div>
          <div :class="` ${rotate == true ? 'rotate-90' : ''} w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%]`">
            <Item :rotate="rotate" :isVisible="!visible" src="bg-[url(https://th.bing.com/th/id/OIP.6dLRJCrfdEDZopjGWHyLoQHaF_?pid=ImgDet&w=495&h=400&rs=1)]" texto="Compra"></Item>
          </div>
        </section>
        <div>
          
        </div>
        
    </div>
</template>
<script>
import Item from "./Item.vue"
export default {
  components: {
    Item
  },
  data() {
    return {
      visible: false,
      rotate : false
    }
  },
  methods: {
    verContenido() {
      this.visible = !this.visible
      this.rotate = !this.rotate
    }
  },
}
</script>
<style lang="">
    
</style>