<template>
    <div class="container post-area">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-12 col-xs-12"  >
                <div class="post-preview">
                    <a href="javascript:;">
                        <h2 class="post-title">webpack-1</h2>
                    </a>
                    <p class="post-meta">Posted by XuBaoshi on December 26, 2016</p>
                </div>
            </div>
            <!--<hr>-->
            <div class="col-lg-10 col-lg-offset-1 col-md-12 col-xs-12"  >
                <div class="post-preview">
                    <a href="javascript:;">
                        <h2 class="post-title">webpack-2</h2>
                    </a>
                    <p class="post-meta">Posted by XuBaoshi on December 26, 2016</p>
                </div>
            </div>
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
    .post-preview
        a
            color:#404040
            text-decoration:none
            background-color:transparent
            &:hover
                color:#337ab7
        p
            color: #808080
            font-size: 18px
            font-style: italic
            margin-top: 0
            margin:30px 0
            line-height:1.5
    .post-area 
        margin-top:30px
</style>