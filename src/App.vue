<template>
    <div id="app" class="page fp-scroll">
        <router-view class="page-wrap"></router-view>
        <div class="tabbar">
            <router-link to="/index" class="tab-item" active-class="tab-item--active">
                <div class="tab-item__icon">
                    <i class="iconfont icon-home"></i>
                </div>
                <div class="tab-item__label">首页</div>
            </router-link>
            <router-link to="/apart" class="tab-item" active-class="tab-item--active">
                <div class="tab-item__icon">
                    <i class="iconfont icon-fenquweixuanzhong"></i>
                </div>
                <div class="tab-item__label">分区</div>
            </router-link>
            <router-link to="/active" class="tab-item" active-class="tab-item--active">
                <div class="tab-item__icon">
                    <i class="iconfont icon-mingxing"></i>
                </div>
                <div class="tab-item__label">动态</div>
            </router-link>
            <router-link to="/search" class="tab-item" active-class="tab-item--active">
                <div class="tab-item__icon">
                    <i class="iconfont icon-search"></i>
                </div>
                <div class="tab-item__label">发现</div>
            </router-link>
            <router-link to="/space" class="tab-item" active-class="tab-item--active">
                <div class="tab-item__icon">
                    <i class="iconfont icon-bottomprofile"></i>
                </div>
                <div class="tab-item__label">我的</div>
            </router-link>
        </div>
    </div>
</template>


<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    mounted() {
        // var overscroll = function (el) {
        //     el.addEventListener('touchstart', function () {
        //         var top = el.scrollTop
        //         var totalScroll = el.scrollHeight
        //         var currentScroll = top + el.offsetHeight
        //         //If we're at the top or the bottom of the containers
        //         //scroll, push up or down one pixel.
        //         //
        //         //this prevents the scroll from "passing through" to
        //         //the body.
        //         if (top === 0) {
        //             el.scrollTop = 1
        //         } else if (currentScroll === totalScroll) {
        //             el.scrollTop = top - 1
        //         }
        //     })
        //     el.addEventListener('touchmove', function (evt) {
        //         //if the content is actually scrollable, i.e. the content is long enough
        //         //that scrolling can occur
        //         // alert(el.offsetHeight+"," +el.scrollHeight)
        //         if (el.offsetHeight < el.scrollHeight) {
        //             evt._isScroller = true
        //         }
        //         // this.offsetHeight = el.offsetHeight
        //         // this.scrollHeight = el.scrollHeight
        //         // console.log(el, el.offsetHeight, el.scrollHeight)
        //     })
        // }
        // overscroll(document.querySelector('.fp-scroll'));
        // document.body.addEventListener('touchmove', function (evt) {
        //     //In this case, the default behavior is scrolling the body, which
        //     //would result in an overflow.  Since we don't want that, we preventDefault.
        //     if (!evt['_isScroller']) {
        //         evt.preventDefault()
        //     }
        // })
    }
}
</script>

<style lang="scss">
@import './styles/common.scss';
@import './assets/font/iconfont.css';

body,
html {
    background: #f4f4f2;
    user-select: none;
}

html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
}

body {
    margin: 0;
    font-family: Helvetica Neue, Helvetica, STHeiTi, Arial, sans-serif;
    touch-action: none;
}

* {
    box-sizing: border-box;
}

.page {
    overflow: hidden;
    height: 100vh;
}

.page-wrap {
    overflow: auto;
    height: 100%;
}

.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: #ffffff;
    display: flex;
}

.tab-item {
    flex: 1;
    display: block;
    padding: 7px 0;
    text-decoration: none;
    color: #929292;
}

.tab-item__icon {
    margin: 0 auto 5px;
    font-size: 45px;
    /*px*/
}

.tab-item--active .tab-item__icon {
    color: $primary-color;
}

.tab-item__label {
    font-size: 20px;
    /*px*/
    line-height: 1;
}
</style>
