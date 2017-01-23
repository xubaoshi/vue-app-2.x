<template>
    <div id="app">
        <v-header></v-header>
        <div class="inner">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VFooter from './components/VFooter.vue'
    import VHeader from './components/VHeader.vue'
    export default {
        name: 'home',
        components: { VFooter, VHeader }
    }
</script>

<style lang="stylus">
    
</style>