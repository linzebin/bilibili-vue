<template>
    <div class="p-index">
        <div class="index-navwrap navlist">
            <a class="navitem" @click="toggleView('live')">直播</a>
            <a class="navitem" @click="toggleView('recommend')">推荐</a>
            <a class="navitem" @click="toggleView('bangumi')">追番</a>
        </div>

        <div class="page-content" is="UIScrollView">
            <component class="page-view" :is="currentView"></component>
        </div>
    </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Live from '@/views/live.vue'
import Recommend from '@/views/recommend.vue'
import Bangumi from '@/views/bangumi.vue'
import { UIScrollView , UIPageView } from '@/components/UIScrollView'

@Component({
    components: { 'live': Live, 'recommend': Recommend, 'bangumi': Bangumi,  UIScrollView , UIPageView }
})
export default class IndexNav extends Vue {

    currentView = 'recommend'

    toggleView(viewName: string) {
        this.currentView = viewName
    }
}
</script>

<style lang="scss">
@import "../styles/common.scss";

.index-navwrap {
    background-color: $primary-color;
    height: 130px;
    /*px*/
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding-top: 60px;
    /*px*/
    z-index: 1;
}

.navlist {
    display: flex;
}

.navitem {
    display: block;
    flex: 1;
    color: #fff;
    text-decoration: none;
    font-size: 34px;
    /*px*/
    font-weight: 300;
    line-height: 1;
}

.page-content {
    position: absolute;
    top: 130px;
    /*px*/
    bottom: 0;
    left: 0;
    right: 0;
}

.page-view {
    // overflow: auto;
}
</style>
