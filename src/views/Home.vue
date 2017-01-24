<template>
    <div class="home">
        <h1>ABIZ FRONTEND</h1>
        <div class="member-wrap">
            <ul class="member-list cf">
                <li class="js-member">
                    <a href="javascript:;">
                        <img src="/public/pic/members/zhangjie.jpg" alt="">
                    </a>
                </li>
                <li class="js-member">
                    <a href="javascript:;">
                        <img src="/public/pic/members/xubaoshi.jpg" alt="">
                    </a>
                </li>
                <li class="js-member">
                    <a href="javascript:;">
                        <img src="/public/pic/members/liuyao.jpg" alt="">
                    </a>
                </li>
                <li class="js-member">
                    <a href="javascript:;">
                        <img src="/public/pic/members/guozhaodong.jpg" alt="">
                    </a>
                </li>
                <li class="js-member member-empty">
                    <a href="javascript:;">
                        <img src="/public/pic/members/qiumingsheng.jpg" alt="">
                    </a>
                </li>
                <li class="js-member member-empty">
                    <a href="javascript:;">
                        <img src="/public/pic/members/wangmei.jpg" alt="">
                    </a>
                </li>
                <li class="js-member member-empty">
                    <a href="javascript:;">
                        <img src="/public/pic/members/zhangxiang.jpg" alt="">
                    </a>
                </li>
                <li class="js-member member-empty"><span>...</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        mounted: function () {
            var  ScrollReveal = require('scrollreveal') 
            window.sr = ScrollReveal();
            window.sr.reveal('.js-member', { duration: 4000 }, 500);
        }
    }

</script>

<style lang="stylus">
.home
    font-family "Microsoft Yahei"
    background-color #202a39
    h1
        padding 80px 0 90px
        font-size 60px
        font-weight 500
        font-family Impact,sans-serif
        color #fff
        text-align center
    .member-wrap
        padding-bottom:50px 
        .member-list        
            text-align center
            li 
                display inline-block
                overflow:hidden
                margin 5px 5px 
                width 50px 
                height 50px
                line-height 50px
                border-radius 50%
                text-align center
                a
                    display block
                    width 100%
                    height 100%
                span
                    vertical-align : middle
                    text-align :center
                img
                    width:50px
                    height:50px
            .member-empty
                background-color #fff
</style>