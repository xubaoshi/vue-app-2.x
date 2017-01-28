<template>
    <ul class="nav cf">
        <li>
            <router-link active-class="on" :to="{ path:'home'}">首页</router-link>
        </li>
        <li>
            <router-link active-class="on" :to="{ path:'standard'}">规范</router-link>
        </li>
        <li>
            <router-link active-class="on" :to="{ path:'plugin'}">组件</router-link>
        </li>
        <li>
            <router-link active-class="on" :to="{ path:'about'}">关于</router-link>
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
            padding:0
            text-decoration:none
            font-size:12px
            font-weight:800
            color:#fff
            &:hover
                color:#ccc
                background-color:transparent
            &:focus
                background-color:transparent
        .on
            color:#ccc
</style>