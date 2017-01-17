<template>
    <div id="app">
        <div class="header">
            <div class="inner">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>