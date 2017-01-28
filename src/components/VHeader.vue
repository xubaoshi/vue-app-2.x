<template>
    <div class="header">
        <v-nav></v-nav>
    </div>
</template>

<script>
    import VNav from './VNav.vue'
    export default {
        name: 'VHeader',
        components: { VNav }
    }
</script>

<style lang="stylus">
.header 
    background-color:#757171
    height:60px
</style>