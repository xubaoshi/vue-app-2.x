<template>
    <ul class="nav  cf">
        <li>
            <router-link :to="{ path:'home'}">Home</router-link>
        </li>
        <li>
            <router-link :to="{ path:'about'}">Home</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'v-nav'
    }
</script>

<style lang="stylus">
.nav
    float:right
    display:inline-block
    vertical-align:middle
    li
        position:relative
        display:inline-block
        padding:0 20px
        height:60px
        line-height:60px
        a
            text-transform:uppercase
            font-size:12px
            font-weight:800
            letter-space:1px
            color:#fff
</style>