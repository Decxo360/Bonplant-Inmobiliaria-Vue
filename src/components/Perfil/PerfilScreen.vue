<template lang="">
    <div>
        <Navbar></Navbar>
        <div class="flex flex-row">
            <SideBar></SideBar>
            <router-view>   
            </router-view>
        </div>
    </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import SideBar from './SideBar.vue';
import InfoPersonal from './InfoPersonal.vue';
export default {
    components:{
        Navbar,SideBar,InfoPersonal
    }
}
</script>
<style lang="">
    
</style>