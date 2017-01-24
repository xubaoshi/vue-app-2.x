<template>
    <ul class="nav  cf">
        <li><a href="javascript:;">Home</a></li>
        <li><a href="javascript:;">About</a></li>
    </ul>
</template>

<script>
    export default {
        name:'v-nav'
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